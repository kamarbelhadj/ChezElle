import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwtSercert);
};

//Route for user login
const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "L'utilisateur n'existe pas",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({
        succes: false,
        message: "Informations d'identification invalides",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//route for user regsitartion
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking user already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return (res.json({ success: false, message: "L'utilisateur existe déjà" }));
    }

    //valisating email formate and strong password
    if (!validator.isEmail(email)) {
      return (res.json({
        success: false,
        message: "Veuillez entrer un email valide",
      }))
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Veuillez entrer un mot de passe avec 8 caractères",
      });
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    console.log("New user registered: ", user);
    const token = createToken(user._id);
    res.json({
      success: true,
      token
      
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const {email , password}=req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.jwtSercert)
      res.json({success:true , token})
    }else{
      res.json({success : false , message : "Informations d'identification invalides"})
    }
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    
  }
};

export { loginUser, registerUser, adminLogin };
