
const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_url = 'mongodb+srv://digitalchief:digitalchief@disrupt.1rczhgt.mongodb.net/?retryWrites=true&w=majority';
const connection = mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection