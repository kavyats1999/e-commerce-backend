const childrens = require('../Models/childrensSchema')

// get all boys and girls product

exports.getallChildrensProductController = async (req, res) => {
    try {
        const allchildrensProduct = await childrens.find()
        res.status(200).json(allchildrensProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get a single product

exports.getAchildProductController = async (req, res) => {
    const { id } = req.params
    try {
        const childproduct = await childrens.findOne({ id })
        res.status(200).json(childproduct)
    } catch (err) {
        res.status(401).json(err)
    }
}


// add a new product

exports.addchildrenProductController = async (req, res) => {
    try {
        const { id, title, price, description, category, image } = req.body;

        // create a new Product instance

        const newProduct = new childrens({
            id,
            title,
            price,
            description,
            category,
            image
        })

        // save the new product to the database

        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: 'product added successfully',
            product: savedProduct
        })
    } catch (err) {
        res.status(400).json({
            message: 'error adding product',
            error: err.message
        })
    }
}

exports.editChildrensproduct = async (req, res) => {
    const { id } = req.params
    const { title, price, description, category, image } = req.body
    const file = req.file ? req.file.filename : image;

    try {
        const updatedProduct = await childrens.findOneAndUpdate(
            { id: Number(id) },
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
        });
    }catch(err){
        res.status(400).json({
            message:'error updating product',
            error:err.message
        })
    }
}

exports.deletechildrenController=async(req,res)=>{
    const{id}=req.params

    try{
        const removedProduct=await childrens.findOneAndDelete({
            id:Number(id)
        })

        if(!removedProduct){
            return res.status(404).json({message:'product not found'})
        }
        res.status(200).json({
            message:'product deleted successfully',
            product:removedProduct
        })
    }catch(err){
        res.status(400).json({
            message:'error deleting product',
            error:err.message
        })
    }
}