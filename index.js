const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const mongo_uri = "mongodb+srv://productionDBexpress:OBfxmKq9nweUoBT3@backend.zsaqcqg.mongodb.net/?retryWrites=true&w=majority&appName=BackEnd"





const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect(
    mongo_uri
).then(()=> console.log("Success")).catch((err)=> console.log(err))



//routes
const authRoute = require("./routes/_auth");
const blogRoute = require("./routes/blogRead");



app.use("/api/blog",blogRoute)
app.use("/api/auth",authRoute);




console.log("Test")

app.get("/test",(req,res)=>{
    console.log("testo")
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log("Listening to port 5000")
})