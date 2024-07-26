const ladies=require('../Models/ladiesSchema')

// get all ladies product

exports.getallLadiesProductController=async(req,res)=>{
    try{
        const allLadiesProduct=await ladies.find()
        res.status(200).json(allLadiesProduct)
    }catch(err){
        res.status(401).json(err)
    }

}

// get a single product

exports.getALadyProductController=async(req,res)=>{
    const{id}=req.params
    try{
        const ladyproduct=await ladies.findOne({id})
        res.status(200).json(ladyproduct)
    }catch(err){
        res.status(401).json(err)
    }
}