const mongoose=require('mongoose') 
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("dropcart server connected successfully to mongodb");
}).catch((err)=>{
    console.log(`mongodb connection failed err:${err}`);
})