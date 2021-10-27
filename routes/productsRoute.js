const express = require("express");

const router = express.Router();
const Product =require('../models/productmodel')
router.get('/getallproducts', (req,res) =>{

  Product.find({} , (err,docs)=>{
    if(!err){
      return res.send(docs) ;
    }

    else{ 
    return res.status(400).json({message :'something went wrong'});
    }
  })
});

router.post("/getproductbyid", (req, res) => {

  Product.find({_id : req.body.productid} , (err , docs)=>{

      if(!err)
      {
          res.send(docs[0])
      }
      else{
          return res.status(400).json({ message: 'something went wrong' });
      }

  })

});
router.post("/deleteproduct", (req, res) => {

  Product.findByIdAndDelete(req.body.productid , (err)=>{
      if(err){
          return res.status(400).json({ message: 'Something went wrong' + err});
      }else{
          res.send('Product deleted successfully')
          
      }
  })

});


router.post("/addproduct", (req, res) => {

  const {product} = req.body

  console.log(product);

  const productModel = new Product({
      name : product.name , 
      price : product.price,
      description : product.description,
      countInStock : product.countInStock ,
      image : product.image ,
      category : product.category

  })

  productModel.save(err=>{
      if(err){
          return res.status(400).json({ message: 'Something went wrong' });
      }else{
          res.send('Product Added Successfully')
      }
  })

});


router.post("/updateproduct", (req, res) => {

  Product.findByIdAndUpdate(req.body.productid , {
      name : req.body.updatedproduct.name,
      price : req.body.updatedproduct.price,
      category : req.body.updatedproduct.category,
      description : req.body.updatedproduct.description,
      countInStock : req.body.updatedproduct.countInStock,
      image : req.body.updatedproduct.image

  } , (err)=>{

      if(err){
          return res.status(400).json({ message: 'Something went wrong'+err });
      }
      else{
          res.send('Product Updated Successfully')
      }

  })

});

// router.post("/deleteproduct ")
module.exports = router
