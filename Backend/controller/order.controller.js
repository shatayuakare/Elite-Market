import Orders from "../model/order.schema.js";

export const getOrder = async (req, res) => {
    try {
        const orders = await Orders.find();

        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const addOrder = async (req, res) => {
    try {
        const { address, quantity } = req.body;

        const order = new Orders({
            address, quantity, stutus: "Order successfully"
        })

        order.save();
        res.status(201).json({ message: "Order Successfull", order })
    } catch (error) {
        res.stutus(400).json(error.message)
    }
}



export const cancelOrder = async (req, res) => {
    try {
        const id = req.params._id;
        const order = await finfOne({ _id: id })
        if (!order) return res.status(404).json({ message: "Order not available" });

        await findOneAndDelete({ _id: id }).then(() => {
            res.status(200).json({ message: "Order Deleted", order })
        })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

