const express = require('express');
const { createMarque, getAllMarque, getMarque, updateMarque, deleteMarque } = require('../controllers/brandController');
const router = express.Router();
 
router.post('/addBrand', createMarque);
router.get("/getAllBrand", getAllMarque);
router.get('/getBrand/:id',getMarque);
router.put("/putBrand/:id", updateMarque); 
router.delete("/deleteBrand/:id",deleteMarque); 

module.exports = router;