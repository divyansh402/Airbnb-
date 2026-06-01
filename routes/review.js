const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const Review =require("../Models/review.js");
const Listing=require("../Models/listing.js");
const {validateReview, isLoggedIn,isreviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//Post Route 
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview)); 
  //Delete Route
  router.delete("/:reviewId",isLoggedIn,isreviewAuthor, wrapAsync(reviewController.deleteReview));

//do nothing
//used for review
module.exports = router;
