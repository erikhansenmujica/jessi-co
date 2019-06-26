const express = require("express");
const router = express.Router();
const { Product } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.post("/addreview", function(req, res) {
  Product.update(
    {
      reviews: Sequelize.fn(
        "array_append",
        Sequelize.col("reviews"),
        req.body.review
      ),
      rating: Sequelize.fn(
        "array_append",
        Sequelize.col("rating"),
        req.body.rating
      )
    },
    {
      where: {
        id: req.body.productId
      }
    }
  ).then(()=>Product.findAll({
    where: {
      id: req.body.productId
    }
  }).then(data => {
    res.send(data);
  }))
  
});
router.get("/:id", function(req, res) {
  console.log(req.params, "AJFLASJDGLASGJLAFKGJL;ASKFJGLKFJGLAFKJG;LADKFJGL;AKDFJGLAKDFJGLADFJGLADKFGJLADFJGLAFJGKJLAFGHKAJFGHKJAHGKJF")
  let id = req.params.id;
  Product.findOne({ where: { id: id } }).then(product => res.send(product));
});

// router.get('/getreview', function(req,res){
//     console.log("SOY EL REQ.BODY", req.body)
//     Product.findAll({ where: { id: req.body.productId } })
//         .then(product => res.json(product.reviews))
// })

module.exports = router;
