const mongoose=require('mongoose')

const ladiesSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    
    title:{
        type:String,
        required:true,

    },

    price:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    rating:{
        rate:{
            type:Number,
            required:true
        },

        count:{
            type:Number,
            required:true
        }
    }
})

const ladies=mongoose.model('ladies',ladiesSchema)
module.exports=ladies