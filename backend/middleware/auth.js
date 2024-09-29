import jwt from 'jsonwebtoken'
const authUser = async (req,res,next) =>{
    const {token} = req.headers ;
    if (!token){
         return (res.json ({success : false , message : 'non autorisé, connectez-vous à nouveau'}))
    }
    try {
        const token_decode = jwt.verify(token,process.env.jwtSercert);
        req.body.userId = token_decode.id;
        next ()
        
    } catch (error) {
        console.log(error)
        res.json({success : false , message : error.message})
        
    }
}
export default authUser ;