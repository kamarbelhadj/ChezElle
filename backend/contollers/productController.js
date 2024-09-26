import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

//function for add product 
const addProduct = async (req,res)=>{
    try {
        const {name , description , price , category , subCategory , uppersizes , lowersizes,color, bestseller} = req.body;
        const image1 =req.files.image1 &&  req.files.image1[0]
        const image2 =req.files.image2 &&  req.files.image2[0]
        const image3 =req.files.image3 &&  req.files.image3[0]
        const image4 =req.files.image4 &&  req.files.image4[0]

        const images = [image1 , image2 , image3 , image4].filter((item)=>item!== undefined)
        let imagesURl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});return result.secure_url

            })
        )

        const parsedUpperSizes = uppersizes ? JSON.parse(uppersizes) : [];
        const parsedLowerSizes = lowersizes ? JSON.parse(lowersizes) : [];
        const parsedColor = color ? JSON.parse(color) : [];
       const productData = {
        name, 
        description,
        price : Number(price),
        images : imagesURl,
        category,
        subCategory,
        uppersizes : parsedUpperSizes,
        lowersizes : parsedLowerSizes ,
        color : parsedColor,
        bestseller : bestseller === "true" ? true : false,
        date:Date.now()
     }
     const product = new productModel(productData);
     await product.save()
        res.json({succes : true , message:"product added"});
        
        
    } catch (error) {
        console.log(error);
        
        res.json({sucees:false , message:error.message})
        
    }


}

//function fro list product 
const listProducts = async (req,res)=>{
try {
    const products = await productModel.find({});
    res.json({success:true,products});
    
} catch (error) {
    console.log(error);    
     res.json({sucees:false , message:error.message})
}
    
}

import mongoose from 'mongoose';

const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.json({
        success: false,
        message: "Invalid product ID format",
      });
    }


    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.json({
        success: false,
        message: "Produit introuvable",
      });
    }

    res.json({
      success: true,
      message: "Produit supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false, 
      message: error.message,
    });
  }
};


//function for single product info
const singleProduct = async (req,res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success : true , product})
        
    } catch (error) {
        console.log(error);
    res.json({
      success: false, 
      message: error.message,
    });
        
    }
    
}

export {addProduct , listProducts , removeProduct, singleProduct}