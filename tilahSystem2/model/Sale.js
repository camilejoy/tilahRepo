const mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://camilejoy:Iefg4a5@itsdcluster-fd3o0.mongodb.net/tilahdb?retryWrites=true&w=majority', {useNewUrlParser:true});

const Sale = mongoose.model('Sale', {
    itemId: {
        type: Schema.Types.ObjectId, ref: 'Seed',
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    sold_by: {
        type: Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    dateNow: {
        type: String,
        require: true
    }
});

module.exports = Sale;