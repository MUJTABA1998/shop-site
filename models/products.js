const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    qty:{
        type: Number,
        required: true
    }
})  


module.exports = mongoose.model("Products", ProductsSchema);
