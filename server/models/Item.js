const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name:{
    type: String,
    required :true
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  state: {
    type: Number,
    required: true
  },
},
{ timestamps: true },);

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
