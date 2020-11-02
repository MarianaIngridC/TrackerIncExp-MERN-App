const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required:[true, 'Añade algun concepto']
    },
    amount: {
        type: Number,
        trim: true,
        required:[true, 'Añade un numero positivo o negativo ']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);