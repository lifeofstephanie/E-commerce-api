const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { productName, cost, productImages, description, stockStatus } = req.body;

  try {
    const newProduct = await Product.create({
      productName,
      ownerId: req.user.userId,
      cost,
      productImages,
      description,
      stockStatus,
    });

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: "Error adding product", error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting product", error: err.message });
  }
};
