const mongoose=require('mongoose')

const childrensSchema=new mongoose.Schema({

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
    }

})

const childrens=mongoose.model('childrens',childrensSchema)

module.exports=childrens