import jwt from 'jsonwebtoken'
const adminAuth = async (req,res,next) => {
    try {
        const {token} = req.headers;
        if (!token){
            return res.json({success:false,message:"Non autorisé, connectez-vous à nouveau"})
        }
         const tokenDecode = jwt.verify(token,process.env.jwtSercert);
         if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Non autorisé, connectez-vous à nouveau"})

         }
         next();
        
    } catch (error) {
        console.log(error)
        res.json({success : false , message : error.message})
        
    }
}
export default adminAuth;