import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    agencia: {
        type: Number,
        require: true
    },
    conta: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        require: true,
        min: 0
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

const accountsModel = mongoose.model('accounts', accountSchema, 'accounts');
export { accountsModel };