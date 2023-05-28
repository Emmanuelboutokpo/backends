const express = require('express');
const { createCars, getAllCars, getCars, updateCars, deleteCars } = require('../controllers/carController');
const router = express.Router();
 
router.post('/addCars', createCars);
router.get("/getAllCars", getAllCars);
router.get('/getCars/:id',getCars);
router.put("/putCars/:id", updateCars); 
router.delete("/deleteCars/:id",deleteCars); 

module.exports = router