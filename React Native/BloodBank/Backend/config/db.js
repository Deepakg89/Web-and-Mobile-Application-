const mongoose = require('mongoose');

const mongoURI =  "mongodb+srv://DeepakKumar:JAIshadaram123@cluster0-o4ngd.mongodb.net/BloodBankDB?retryWrites=true&w=majority";


// mongoose.connect(mongoURI);
mongoose.connect(mongoURI, {useNewUrlParser: true});

module.exports = mongoose;