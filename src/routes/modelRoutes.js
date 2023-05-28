const express = require('express');
const { createModel, getAllModel, getModel, updateModel, deleteModel } = require('../controllers/modelController');
const router = express.Router();
 
router.post('/addModel', createModel);
router.get("/getAllModel", getAllModel);
router.get('/getModel/:id',getModel);
router.put("/putModel/:id", updateModel); 
router.delete("/deleteModel/:id",deleteModel); 

module.exports = router