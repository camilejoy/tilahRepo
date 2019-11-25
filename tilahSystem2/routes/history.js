const express = require('express');
const router = new express.Router();
const Log = require('../model/History');
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

router.post('/', verifyToken, urlEncoded, (req, res) => {
    var history = new Log({
        seedname: req.body.seed,
        user_Id: req.body.userID,
        userName: req.body.user,
        action: req.body.action
    });
    history.save((err) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'Record Saved'});
    });
});

router.get('/', verifyToken, (req, res) =>{
    Log.find({}, (err, data) => {  
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});

router.get('/:id', verifyToken, (req, res) => {
    Log.find({user_Id: req.params.id}, (err, data) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json(data);
    });
});


module.exports = router; 