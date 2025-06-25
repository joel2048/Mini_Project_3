const wishlistService = require("../services/wishlistService");

module.exports = {
  getAll: (req, res) =>
    wishlistService.getAll(req, res),
  
  createWishlistItem: (req, res) =>
    wishlistService.createWishlistItem(req, res),
};