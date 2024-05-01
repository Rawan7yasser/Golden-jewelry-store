const express =require("express")
const products =require("./routes/product")
const connectDB =require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
require('dotenv').config()

const publicStripKey=process.env.STRIPE_PUBLIC_KEY;
const secretStripKey = process.env.STRIPE_SECRET_KEY
//console.log(publicStripKey)


const app =express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/product",products) 
app.use(express.static("./public"))
app.use(notFound);
app.use(errorHandlerMiddleware);







const  port = process.env.PORT||3000  ; 

const start =async()=>{

    try{
        await connectDB(process.env.MONGODB_URL)
        app.listen(port, () => console.log(`Server is running on ${port}`))}

    catch(err){
        console.log(" DB Error ")
    }


}

start()

