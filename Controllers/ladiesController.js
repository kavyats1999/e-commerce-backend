const ladies = require('../Models/ladiesSchema')

// get all ladies product

exports.getallLadiesProductController = async (req, res) => {
    try {
        const allLadiesProduct = await ladies.find()
        res.status(200).json(allLadiesProduct)
    } catch (err) {
        res.status(401).json(err)
    }

}

// get a single product

exports.getALadyProductController = async (req, res) => {
    const { id } = req.params
    try {
        const ladyproduct = await ladies.findOne({ id })
        res.status(200).json(ladyproduct)
    } catch (err) {
        res.status(401).json(err)
    }
}


exports.addLadiesProductController = async (req, res) => {
    try {
        const { id, title, price, description, category, image } = req.body

        //create new product instance

        const newProduct = new ladies({
            id,
            title,
            price,
            description,
            category,
            image
        });

        //save the new product to the database
        const savedProduct = await newProduct.save()

        res.status(201).json({
            message: 'product added succesfully',
            product: savedProduct
        })

    } catch (err) {
        res.status(400).json({
            message: 'Error adding product',
            error: err.message
        });
    }
}

exports.editladiesProductController = async (req, res) => {
    const { id } = req.params
    const { title, price, description, category, image } = req.body
    const file = req.file ? req.file.filename : image

    try{
        const updatedProduct=await ladies.findOneAndUpdate(
            {id:Number(id)},
            {
               title,
               price,
               description,
               category,
               image:file 
            },
            {new:true}
        );

        if(!updatedProduct){
            return res.status(404).json({message:'product not found'})
        }

        res.status(200).json({
            message:'product updated succesfully',
            product:updatedProduct
        })

    }catch(err){
        res.status(400).json({
            message:'error updating product',
            error:err.message
        })
    }

}


exports.deleteladiesproductController=async(req,res)=>{
    const{id}=req.params
    try{
        const removedProduct=await ladies.findOneAndDelete({
            id:Number(id)
        })

        if(!removedProduct){
            return res.status(404).json({message:'product not found'})
        }
        res.status(200).json({
            message:'product deleted successfully',
            product:removedProduct
        });

    }catch(err){
        res.status(400).json({
            message:'error deleting product',
            error:err.message
        })
    }
}