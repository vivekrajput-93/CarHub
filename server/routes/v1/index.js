const express = require("express");
const {
  create,
  login,
  resetPassword,
  forgotPassword,
  testController,
} = require("../../controllers/auth-controller");
const {
  validateAuth,
  isAdmin,
  requiredSignIn,
} = require("../../middlewares/auth-middleware");
const {
  createCategory,
  updateCategory,
  getAllCategories,
  getCategory,
  deleteCategory,
} = require("../../controllers/category-controller");

const formidable = require("express-formidable");
const {
  createProduct,
  getProduct,
  getSingleProduct,
  getproductPhoto,
  deleteProduct,
  updateProduct,
} = require("../../controllers/product-controller");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, login);

router.post("/auth/reset-password/:id/token", resetPassword);

router.post("/auth/forgot-password", forgotPassword);

// categories routes

router.post("/auth/create-category", createCategory);

router.put("/auth/update-category/:id", updateCategory);

router.get("/auth/all-categories", getAllCategories);

router.get("/auth/single-category/:slug", getCategory);

router.delete("/auth/delete-category/:id", deleteCategory);

// product routes
router.post("/auth/create-product", formidable(), createProduct);

router.get("/auth/get-product", getProduct);

router.get("/auth/single-product/:slug", getSingleProduct);

router.get("/auth/product-photo/:pid", getproductPhoto);

router.delete("/auth/delete-product/:pid", deleteProduct);

router.put("/auth/update-product/:pid", formidable(), updateProduct);

module.exports = router;
