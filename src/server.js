const port = process.env.PORT || 5000;
const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();
dotenv.config();

// db configs
mongoose.connect(`mongodb+srv://Ingrid:${process.env.MONGO_PASSWORD}@transaction.rs7iu.mongodb.net/transaction?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log('Base de datos conectada')
})

// routes
const transactionRoutes = require('./routes/transaction');

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
    require('dotenv').config();
}

// middlewares
app.use(express.json());
app.use(cors());
app.use('/api', transactionRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')))
}

app.listen(process.env.PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`)
})