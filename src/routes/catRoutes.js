const express = require('express');
const { createCategory, getAllCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/catController');
const router = express.Router();
 
router.post('/addCat', createCategory);
router.get("/getAllCat", getAllCategory);
router.get('/getCat/:id',getCategory);
router.put("/putCat/:id", updateCategory); 
router.delete("/deleteCat/:id",deleteCategory); 

module.exports = router