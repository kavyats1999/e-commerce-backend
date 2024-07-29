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


// Add a new product
exports.addProductController = async (req, res) => {
    try {
        const { id, title, price, description, category, image } = req.body;

        // Create a new product instance
        const newProduct = new products({
            id,
            title,
            price,
            description,
            category,
            image
        });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: 'Product added successfully',
            product: savedProduct
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error adding product',
            error: err.message
        });
    }
};

// Edit an existing product
exports.editProductController = async (req, res) => {
    const { id } = req.params; // Extract custom product ID from URL parameters
    const { title, price, description, category, image } = req.body;
    const file = req.file ? req.file.filename : image; // Use the uploaded file name or keep the existing image

    try {
        const updatedProduct = await products.findOneAndUpdate(
            { id: Number(id) }, // Find product by custom id (convert id to number)
            {
                title,
                price,
                description,
                category,
                image: file // Set the new image if a new file is uploaded
            },
            { new: true } // Return the updated document
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product updated successfully',
            product: updatedProduct
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error updating product',
            error: err.message
        });
    }
};
// Delete a product
exports.deleteProductController = async (req, res) => {
    // Extract ID from URL parameters
    const { id } = req.params;

    try {
        // Find and delete the product by its ID
        const removedProduct = await products.findOneAndDelete({ id: Number(id) });

        if (!removedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
            product: removedProduct
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error deleting product',
            error: err.message
        });
    }
};






