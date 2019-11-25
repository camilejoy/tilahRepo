const express = require('express');
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

//starting the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
});