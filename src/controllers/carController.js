const connection = require('../../db/db');
const processEnv = process.env

exports.getAllCars = async (req, res) => { 
  const q = "SELECT  cars.idcars,cars.title,cars.description, categorie.category, marque.brand, model.model FROM cars JOIN categorie  ON categorie.idcategorie = cars.categorie_idcategorie JOIN model ON cars.model_idmodel	 = model.idmodel JOIN marque ON cars.marque_idmarque= marque.idmarque";
    connection.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({
      result : data,
     }) ; 
    })
}

 exports.createCars = async (req, res) => {
    const { title, description, model_idmodel, categorie_idcategorie,marque_idmarque} = req.body;

   const q = "INSERT INTO cars(`title`, `description`,  `model_idmodel`,`categorie_idcategorie`,`marque_idmarque`) VALUES (?)";
   const values = [title,description,model_idmodel, categorie_idcategorie, marque_idmarque];

 connection.query(q, [values], (err, data) => {
   if (err) return res.status(500).json(err);
   return res.status(201).json("Cars has been created.");
 });
 
} 

exports.getCars = async (req, res) => {
    const { id } = req.params
    const q = "SELECT  cars.idcars,cars.title,cars.description, categorie.category, marque.brand, model.model FROM cars JOIN categorie  ON categorie.idcategorie = cars.categorie_idcategorie JOIN model ON cars.model_idmodel	 = model.idmodel JOIN marque ON cars.marque_idmarque= marque.idmarque  WHERE 	idcars = ?";
  connection.query(q, [id],(err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length ==0) return res.status(404).json('Cars not found!')
    return res.status(200).json({result: data[0]});
  });
}


 exports.updateCars = async (req, res) => {
    const { id } = req.params
    const { title, description,model_idmodel, categorie_idcategorie,marque_idmarque} = req.body;
  
    const q="UPDATE cars SET `title`=?,`description`=?,`model_idmodel`=?,`categorie_idcategorie`=?, `marque_idmarque`=? WHERE `idcars` = ? ";

    const values = [title,description,model_idmodel, categorie_idcategorie, marque_idmarque];

    connection.query(q, [...values, id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Cars not found!')
      return res.json("Cars has been updated.");
    }); 
}
 

exports.deleteCars = async (req, res) => {
    const { id } = req.params

    const q = "DELETE FROM cars WHERE `	idcars` = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your cars!");
      if (data.length ==0) return res.status(404).json('Cars not found!')
      return res.json("Cars has been deleted!");
    });
}  