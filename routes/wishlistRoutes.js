const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

router.get(
  "/wishlist/:id",
  wishlistController.getAll
);

router.post(
  "/wishlist/post",
  wishlistController.createWishlistItem
);

module.exports = router;