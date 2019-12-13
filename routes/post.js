const express = require('express');
const postModel = require('../models/postModel');
const router = express.Router();

//localhost:3000/posts/(GET)
router.get('/', (req, res) => {
    postModel.find((err, data) => {
        if(err){
            res.status(500);
            res.send(err);
            console.log(err);
        }
        else{
            res.status(200);
            res.send(data);
        }
    });
});

router.post('/', (req, res) => {
    const Post = new postModel({author: req.body.author, title: req.body.title, description: req.body.description, text: req.body.description});
    Post.save((err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(`Saved successfuly`);
        }
    })
});

module.exports = router;