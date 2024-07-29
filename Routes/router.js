const express=require('express')

const productController=require('../Controllers/productController')

const ladiesController=require('../Controllers/ladiesController')

const childrenscontroller=require('../Controllers/childrenController')

const userController=require('../Controllers/userController')

const contactController=require('../Controllers/contactController')

const addressController=require('../Controllers/addressController')

const adminsController=require('../Controllers/adminsController')

const router=new express.Router()







router.get('/products/all',productController.getallProductController)

// get a single product
router.get('/products/view/:id',productController.getAproductController)


router.get('/ladies/all',ladiesController.getallLadiesProductController)

// get a single product

router.get('/ladies/view/:id',ladiesController.getALadyProductController)

router.get('/childrens/all',childrenscontroller.getallChildrensProductController)

// get a single product

router.get('/childrens/view/:id',childrenscontroller.getAchildProductController)

// register

router.post('/user/register',userController.registerController)

// login

router.post('/user/login',userController.loginController)

// contact form

router.post('/contact',contactController.addContactController)

router.post('/address',addressController.addAddressController)

router.post('/gents',productController.addProductController)

router.post('/ladies',ladiesController.addLadiesProductController)

router.post('/childrens',childrenscontroller.addchildrenProductController)


router.put('/products-edit/:id', productController.editProductController);

router.delete('/products-delete/:id',productController.deleteProductController)

router.put('/ladies-edit/:id',ladiesController.editladiesProductController)

router.put('/childrens-edit/:id',childrenscontroller.editChildrensproduct)

router.delete('/ladies-delete/:id',ladiesController.deleteladiesproductController)

router.delete('/childrens-delete/:id',childrenscontroller.deletechildrenController)

router.post('/admin/login',adminsController.addAdminLoginController)

router.get('/get-contacts',contactController.getallContactsController)

router.get('/get-addresses',addressController.getallAddressController)


module.exports=router