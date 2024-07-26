const childrens=require('../Models/childrensSchema')

// get all boys and girls product

exports.getallChildrensProductController=async(req,res)=>{
    try{
        const allchildrensProduct=await childrens.find()
        res.status(200).json(allchildrensProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

// get a single product

exports.getAchildProductController=async(req,res)=>{
    const{id}=req.params
    try{
        const childproduct=await childrens.findOne({id})
        res.status(200).json(childproduct)
    }catch(err){
        res.status(401).json(err)
    }
}