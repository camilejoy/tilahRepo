const mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://camilejoy:Iefg4a5@itsdcluster-fd3o0.mongodb.net/tilahdb?retryWrites=true&w=majority', {useNewUrlParser:true});

const Log = mongoose.model('Log', {
    seedname: {
        type: String,
        require: true
    },
    user_Id: {
        type: Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    action: {
        type: String,
        require: true
    },
    dateModified: {
        type: Date,
        default: Date.now
    }
});

module.exports = Log;