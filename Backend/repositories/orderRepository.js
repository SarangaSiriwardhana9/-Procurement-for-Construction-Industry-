// repositories/orderRepository.js

const Order = require("../models/Order");

class OrderRepository {
  async create(orderData) {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  }

  async getAll() {
    return await Order.find();
  }

  async getById(orderId) {
    return await Order.findById(orderId);
  }
}

module.exports = OrderRepository;
