//import
const todo = require("../models/todo");


//define route handler
exports.updateTodo=async(req,res)=>{
 try {
    //extract title and description from the request body
    const {id}=req.params;
    const{title,description}=req.body;
    const todos=await todo.findByIdAndUpdate(
      {_id: id},
      {title,description,updateAt:Date.now()});
   //  if(!todos){
   //      return res.status(404).json({
   //         sucess:false,
   //         message:"No Data Found With Given Id",
   //      })
   //   }
      res.status(200).json({
        sucess:true,
        data:todos,
        message:`Todo ${id} data sucessfully updated`,
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
