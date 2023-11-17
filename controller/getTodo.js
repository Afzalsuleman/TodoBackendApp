//import
const todo = require("../models/todo");
//const todo = require("../models/todo");

//define route handler
exports.getTodo=async(req,res)=>{
 try {
    //get all data from db
    const todos=await todo.find({});
    res.status(200).json({
        sucess:true,
        data:todos,
        message:'fetched sucessfully'
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
exports.getTodoById=async(req,res)=>{
    try {
       //extract by id
       const id=req.params.id;
       const todos=await todo.findById({_id: id});

      //  data forgiven id not found
      if(!todos){
         return res.status(404).json({
            sucess:false,
            message:"No Data Found With Given Id",
         })
      }
       res.status(200).json({
         sucess:true,
         data:todos,
         message:`Todo ${id} data sucessfully fetched`,
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