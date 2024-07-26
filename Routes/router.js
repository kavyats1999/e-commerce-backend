const express=require('express')

const productController=require('../Controllers/productController')

const ladiesController=require('../Controllers/ladiesController')

const childrenscontroller=require('../Controllers/childrenController')

const userController=require('../Controllers/userController')

const contactController=require('../Controllers/contactController')

const addressController=require('../Controllers/addressController')

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

module.exports=router