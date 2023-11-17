const mongoose=require('mongoose');
//add env
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connection sucessfull")})
.catch((error)=>{
console.log("recieved an error");
console.log(error.message);
process.exit(1);
});
}
module.exports=dbConnect;
// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase',{
//     useNewurlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("connection sucessfull")})
// .catch((error)=>{console.log("recieved an error")});