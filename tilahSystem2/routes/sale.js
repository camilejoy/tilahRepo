const express = require('express');
const router = new express.Router();
const Sale = require('../model/Sale');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json();
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

router.get('/', verifyToken,  (req, res) =>{
    Sale.find({}, (err, data) => {  
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});

router.get('/:id', verifyToken, (req, res) => {
    Sale.findOne({_id: req.params.id})
    .populate('sales') 
    .exec((err, data) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});

router.post('/', verifyToken, urlEncoded, (req, res) => {
    var sale = new Sale({
        itemId: req.body.itemId,
        quantity: req.body.quantity,
        amount: req.body.amount,
        sold_by: req.body.sold_by,
        dateNow: req.body.dateNow
    });
    sale.save((err) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'Record Saved'});
    });
});

router.put('/:saleID', verifyToken, urlEncoded, (req, res) => {
    Sale.updateOne({_id: req.params.saleID}, {
        itemId: req.body.itemId,
        quantity: req.body.quantity,
        amount: req.body.amount,
        sold_by: req.body.user
    }, (err) => {
        if(err) {res.status(401).send('Invalid Request!');}
        res.json({msg: 'Record Updated!'});
    });
});

router.delete('/:id', verifyToken, (req, res) => {

    Sale.deleteOne({_id:req.params.id},(err,data) => {
        if(err){
            res.status(401).send('Invalid Request!');
        }
            res.json(data);
    });
});

module.exports = router; 