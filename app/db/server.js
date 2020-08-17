const express = require('express');
const app = express();
const mongoose = require('mongoose');
let body = require('body-parser');
const attempt = require('./attempt');

mongoose.connect('mongodb+srv://admin:admin@cluster0.dvf4z.azure.mongodb.net/fish_point?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true});

app.use(body.urlencoded({extended: true}));
app.use(body.json());

let port = process.env.port || 4000;
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message: 'Out fishing'});
});

router.get('/attempts',(req,res)=>{
    attempt.find((err,attempts)=>{
        if(err){
            console.log('no attempts found, go fish!'+ err)
        }
        else{
           res.json(attempts);
        }
    });
});
// router.post('/attempts',(req,res)=>{
//     res.json({message: 'Out fishing'});
// });

app.use('/v1/api',router);

app.listen(port);
console.log("<('O')> Now we're fishing, casting on port "+port);



