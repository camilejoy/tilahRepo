const express = require('express');
const router = new express.Router();
const jwt = require ('jsonwebtoken');
const User = require('../model/User');

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

router.get('/', verifyToken, (req, res) => {
    User.find({}, (err, data) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        else{
            res.json(data);
        }
    });
});

router.get('/:id', verifyToken, (req, res) => {
    User.find({_id: req.params.id}, (err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

router.post('/', verifyToken, urlEncoded, (req, res) => {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role
    });

    user.save((err) => {
        if(err){
            res.status(401).send('Invalid Request!');
        }   
        res.json({msg: 'Record Saved'});
    });
});

router.post('/login', urlEncoded, (req, res) => {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.findOne({username: user.username}, (err, data) => {
        if(err){
            res.status(401).send('Invalid Request!');
        }
        else{
            if(!data){
                res.status(401).send('Invalid Username!');
            }
            else if(data.password != user.password){
                res.status(401).send('Invalid Password!');
            }
            else{
                let payload = { subject: data._id};
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token})
            }
        }
    })
});

router.put('/:id', verifyToken, urlEncoded, (req, res) => {
    User.updateOne({_id: req.params.id}, {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role
    }, (err) => {
        if(err){
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'User Updated!'});
    });
});

router.delete('/:id', verifyToken, (req, res) => {
    User.deleteOne({_id: req.params.id}, (err) => {
        if(err) {
            res.status(401).send('Invalid Request!');
        }
        res.json({msg: 'Record Deleted!'});
    });

});

module.exports = router;