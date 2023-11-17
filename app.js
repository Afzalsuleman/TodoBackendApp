// server instantiate

const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT||4000;
// used to parese req.body in express -> put or post
// const bodyParser=require('body-parser');
//we can also use this middleware
app.use(express.json());
// specifically parse json data and add it to the request.body object
//app.use(bodyParser.json())
// activate server at 3000 
// app.listen(3000,()=>{
//     console.log("server runing at port 3000")
// });
// app.get('/',(req,res)=>{
//     res.send("hello jee, kaise ho sare");
// })

// app.post('/api/cars',(req,res)=>{
//     const{name,brand}= req.body;
//     console.log(name);
//     console.log(brand);
//     res.send("car submitted sucessfully")
// })
// import routes
const routes=require('../JS/routes/todos');
//mount the todo api routes
app.use("/api/v1",routes); 

// start survey
app.listen(port,()=>{ 
    console.log('server runing at ${port}')
})
//connect db
const dbConnect=require("./config/databaase");
dbConnect();

// default page
app.get("/",(req,res)=>{
    res.send('<h1> this is my page imp </h1>');
})