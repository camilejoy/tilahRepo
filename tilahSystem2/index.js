const express = require('express');
//const jwt = require ('jsonwebtoken');
const app = new express();
const cors =  require('cors');

app.use(cors());

const seed = require('./routes/seed');
const user = require('./routes/user');
const sale = require('./routes/sale');
const log = require('./routes/history');

app.use('/seed', seed);
app.use('/user', user);
app.use('/sale', sale);
app.use('/log', log);
app.use(express.static(__dirname + '/dist/tilahSystem'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/dist/tilahSystem/index.html');
});

app.get('/*', function (req, res) {
    res.sendfile(__dirname + '/dist/tilahSystem/index.html'); // load our index.html file
});


// function verifyToken(req, res, next){
//     if(!req.headers.authorization){
//         return res.status(401).send('Unauthorized Request');
//     }
//     let token = req.headers.authorization.split(' ')[1];
//     if(token === 'null'){
//         return res.status(401).send('Unauthorized Request');
//     }
//     let payload = jwt.verify(token, 'secretKey');
//     if(!payload){
//         res.status(401).send('Unauthorized Request');
//     }
//     req.userId =  payload.subject;
//     next()
// }

//starting the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
});