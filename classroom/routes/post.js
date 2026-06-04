const express = require("express");
const router = express.Router();

//Index 
//hgjhgjh

router.get("/", (req, res) => {
    res.send("GET for users");
})


//Show 
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});


//POST 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//DELETE //used to delete
router.delete("/:id", (req, res) => {
    res.send("delete for post id");
});

module.exports = router;
