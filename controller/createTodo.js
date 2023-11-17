//import
const todo = require("../models/todo");

//define route handler
exports.createTodo=async(req,res)=>{
 try {
    //extract title and description from the request body
    const {title,description}=req.body;
    //create a new todo object
    const response=await todo.create({title,description});
    //send json response with sucess flag
    res.status(200).json({
        sucess:true,
        data:response,
        message:'Entry created sucessfully'
    })
 } catch (error) {
    HTMLFormControlsCollection.error(error);
    console.log(error);
    res.status(500).json({
    sucess:false,
    data:"internal server error",
    message:error.message,
    })
 }
}
