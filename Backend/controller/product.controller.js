import Products from "../model/product.schema.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        if (!products) return res.status(404).json({ message: "Products not found" })

        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Products.findOne({ _id: req.params.id });
        if (!product) return res.status(404).json({ message: "Products not found" })

        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const createProduct = async (req, res) => {
    try {
        const { title, description, img, price, shop, quantity, category } = req.body;

        const newProduct = new Products({
            title, description, img, price, quantity, shop, category
        })
        newProduct.save()
        res.status(201).json({ message: "New product created", newProduct })
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const updateProduct = async (req, res) => {
    try {
        const { title, description, img, price, quantity, shop, category } = req.body;
        const _id = req.params.id
        const product = await Products.findOne({ _id })
        if (!product) return res.status(404).json({ message: "Product not found" })

        await Products.findOneAndUpdate({ _id }, {
            title, description, img, price, quantity, category
        })

        res.status(200).json({
            message: "Product update",
            title, price,
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const dropProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await Products.findOne({ _id })

        if (!product) return res.status(404).json({ message: "Product not Found" })

        await Products.findOneAndDelete({ _id });
        res.status(200).json({ message: "Product Deleted", product })
    } catch (error) {
        res.status(400).json(error.message)
    }
}