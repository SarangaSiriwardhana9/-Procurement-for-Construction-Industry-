// routes/order.js
// //Repository Pattern has been used for this file

const express = require("express");
const router = express.Router();
const OrderRepository = require("../repositories/orderRepository");

const orderRepository = new OrderRepository();

// Route to create a new order
router.post("/", async (req, res) => {
  try {
    const orderData = req.body;
    const savedOrder = await orderRepository.create(orderData);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: "Error creating the order" });
  }
});

// Route to get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await orderRepository.getAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

// Route to get details of a specific order by ID
router.get("/:orderId", async (req, res) => {
  try {
    const order = await orderRepository.getById(req.params.orderId);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching order details" });
  }
});

module.exports = router;
