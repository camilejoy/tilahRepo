const mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://camilejoy:Iefg4a5@itsdcluster-fd3o0.mongodb.net/tilahdb?retryWrites=true&w=majority', {useNewUrlParser: true});

const User = mongoose.model('User', {
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
});

module.exports = User;