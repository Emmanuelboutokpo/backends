const connection = require('../../db/db');

exports.createModel = async (req, res) => {
const {model} = req.body
 
    const q = "INSERT INTO model(`model`) VALUES (?)";
    const values = [model];
    connection.query(q, [values], (err, data) => {
   if (err) return res.status(500).json(err);
   return res.status(201).json("Model has been created.");
})

}

exports.getAllModel = async (req, res) => {
    const q = "SELECT * FROM model";
    connection.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.length ==0) return res.status(404).json('Model not found!')
    return res.status(200).json(data);
  });
}

 exports.getModel= async (req, res) => {
    const { id } = req.params
    const q = "SELECT  `model` FROM model  WHERE idmodel = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Model not found!')
      return res.status(200).json(data[0]);
    });
}

exports.updateModel= async (req, res) => {
    const { id } = req.params
    const {model} = req.body
    const q="UPDATE model SET `model`=? WHERE `idmodel` = ?";
    const values = [model];

    connection.query(q, [...values, id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Model not found!')
      return res.json("Model has been updated.");
    });
}

exports.deleteModel= async (req, res) => {
    const { id } = req.params
    const q = "DELETE FROM model WHERE `idmodel` = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your model!");

      return res.json("Model has been deleted!");
    });

} 