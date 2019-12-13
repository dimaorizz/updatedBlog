const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');
const postsRouter = require('./routes/post');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MongoDB Connected!');
    }
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + `/client`));
app.use('/posts', postsRouter);

app.listen(keys.PORT, () => {
    console.log(`Server started successfully on port ${keys.PORT}`);
});
