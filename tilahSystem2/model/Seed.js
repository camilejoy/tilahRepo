const mongoose = require('mongoose'), Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://camilejoy:Iefg4a5@itsdcluster-fd3o0.mongodb.net/tilahdb?retryWrites=true&w=majority', {useNewUrlParser:true});

const Seed = mongoose.model('Seed', {
    name: {
        type: String,
        require: true,
        unique: true
    },
    variety: {
        type: String,
        require: true
    },
    classification: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    number_of_days: {
        type: Number,
        require: true
    },
    stocks: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    updated_by: {
        type: Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Seed;