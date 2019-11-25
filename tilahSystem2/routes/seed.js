const express = require('express');
const router = new express.Router();
const Seed = require('../model/Seed');
const jwt = require ('jsonwebtoken');

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Unauthorized Request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if(!payload){
        res.status(401).send('Unauthorized Request');
    }
    req.userId =  payload.subject;
    next()
}

const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();

router.get('/', verifyToken, (req, res) =>{
    Seed.find({}, (err, data) => {  
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});

router.get('/:id', verifyToken, (req, res) => {
    Seed.findOne({_id: req.params.id})
    .populate('users') 
    .exec((err, data) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});

router.post('/', verifyToken, urlEncoded, (req, res) => {
    var seed = new Seed({
        name: req.body.name,
        variety: req.body.variety,
        classification: req.body.classification,
        description: req.body.description,
        price: req.body.price,
        number_of_days: req.body.number_of_days,
        stocks: req.body.stocks,
        updated_by: req.body.UserID
    });
    seed.save((err) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'Record Saved'});
    });
});

router.put('/:seedID', verifyToken, urlEncoded, (req, res) => {
    Seed.updateOne({_id: req.params.seedID}, {
        name: req.body.name,
        variety: req.body.variety,
        classification: req.body.classification,
        description: req.body.description,
        price: req.body.price,
        number_of_days: req.body.number_of_days,
        stocks: req.body.stocks,
        updated_by: req.body.updated_by
    }, (err) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'Record Updated!'});
    });
});

router.delete('/:id', verifyToken, (req, res) => {

    Seed.deleteOne({_id:req.params.id},(err,data) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
            res.json(data);
    });

});

module.exports = router; 