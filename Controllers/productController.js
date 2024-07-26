const products=require('../Models/productsSchema')

// get all products

exports.getallProductController=async(req,res)=>{
    try{
        const allProduct=await products.find()
        res.status(200).json(allProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

// get a single product 

exports.getAproductController=async(req,res)=>{

    const{id}=req.params
    try{
       const product=await products.findOne({id})
       res.status(200).json(product)
    }catch(err){
        res.status(401).json(err)
    }
}

