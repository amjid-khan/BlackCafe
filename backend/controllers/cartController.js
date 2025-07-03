import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async (req, res) => {
    try {
        const userId = req.userId; // From JWT middleware

        const { itemId } = req.body;
        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }

        // Find user
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update cart
        let cartData = userData.cartData || {};
        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        // Save updated cart
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.error("Add to cart error:", error);
        res.status(500).json({ success: false, message: "Server error while adding to cart" });
    }
};


// remove item from user cart
const removeFromCart = async (req, res) => {
    try {
        const userId = req.userId;
        const { itemId } = req.body;
        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = userData.cartData || {};
        if (cartData[itemId] && cartData[itemId] > 0) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Item removed from cart" });
    } catch (error) {
        console.error("Remove from cart error:", error);
        res.status(500).json({ success: false, message: "Server error while removing item" });
    }
};


// fetch user cart data
const getCart = async (req, res) => {
    try {
        const userId = req.userId;
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const cartData = userData.cartData || {};
        res.json({ success: true, cartData });
    } catch (error) {
        console.error("Get cart error:", error);
        res.status(500).json({ success: false, message: "Server error while fetching cart" });
    }
};


export { addToCart, removeFromCart, getCart };
