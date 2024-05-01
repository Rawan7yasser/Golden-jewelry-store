
const {customClassError}=require("../errors/myError")

const errorHandler=(req,res,next,err)=>{
if(err instanceof customClassError){
return  res.statusCode(err.statesCode).json({error:err.message})
}
res.statusCode(500).json({error:"some thing went wrong , please try again" })
}

module.exports= errorHandler

