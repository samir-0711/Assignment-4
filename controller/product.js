import Product from "../model/product.js";

export const addProduct = async (req, res) => {
  try {
    let { id, name, email, location } = req.body;

    if (!id || !name) {
      return res.status(405).json({ message: "Id or Name Missing!" });
    }

    const product = await Product.create({
      id,
      name,
      email,
      location,
    });

    return res.status(200).json({ message: "Product Added", data: product });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(405).json({ message: "Id is Missing!" });
    }

    const products = await Product.find({ id });

    return res
      .status(200)
      .json({ message: `${products.length} Product Found`, data: products });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      message: `${products.length} Product(s) Delivered`,
      data: products,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let { id, ...updatedProduct } = req.body;

    if (!id) {
      return res.status(405).json({ message: "Id is Missing!" });
    }

    const product = await Product.findOneAndUpdate({ id }, updatedProduct, {
      new: true,
    });

    if (product === null) {
      return res.status(405).json({ message: "No product found" });
    }

    return res.status(200).json({ message: "Product Updated", data: product });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(405).json({ message: "Id is Missing!" });
    }

    const product = await Product.findOneAndDelete({ id });

    if (product === null) {
      return res.status(405).json({ message: "No product found" });
    }

    return res.status(200).json({ message: "Product Deleted", data: product });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
