const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const cors =require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 const category = require('./routes/catRoutes');
 const cars = require('./routes/carsRoutes');
 const brand = require('./routes/brandRoutes');
 const model = require('./routes/modelRoutes');

 app.use(express.static(path.join(__dirname,"uploads")));  
 app.use("/api", category);  
 app.use("/api", cars);  
 app.use("/api", brand);  
 app.use("/api", model);  
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));