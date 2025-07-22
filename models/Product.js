const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cost: Number,
  productImages: [String],
  description: String,
  stockStatus: String,
});

module.exports = mongoose.model('Product', productSchema);
