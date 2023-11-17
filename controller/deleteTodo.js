//import
const todo = require("../models/todo");

exports.deleteTodo=async(req,res)=>{
    try {
       //extract title and description from the request body
       const {id}=req.params;
       const todos=await todo.findByIdAndDelete(
         {_id: id});
         res.status(200).json({
           sucess:true,
           data:todos,
           message:`Todo ${id} data sucessfully deleted`,
         })
       
    } catch (error) {
       console.error(error);
       console.log(error);
       res.status(500).json({
       sucess:false,
       data:"internal server error",
       message:error.message,
       })
    }
   }