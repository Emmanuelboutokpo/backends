const connection = require('../../db/db');

exports.createMarque = async (req, res) => {
const {brand} = req.body
    const q = "INSERT INTO marque(`brand`) VALUES (?)";
    const values = [brand];
    connection.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json("Brand has been created.");
})
 
}

exports.getAllMarque = async (req, res) => {
    const q = "SELECT * FROM marque";
    connection.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.length ==0) return res.status(404).json('Brand not found!')
    return res.status(200).json(data);
  });
}

 exports.getMarque= async (req, res) => {
    const { id } = req.params
    const q = "SELECT  `brand` FROM marque  WHERE idmarque = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Brand not found!')
      return res.status(200).json(data[0]);
    });
}

exports.updateMarque= async (req, res) => {
    const { id } = req.params
    const {brand} = req.body
    const q="UPDATE marque SET `brand`=? WHERE `idmarque` = ?";
    const values = [brand];

    connection.query(q, [...values, id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Brand not found!')
      return res.json("Brand has been updated.");
    });
}

exports.deleteMarque= async (req, res) => {
    const { id } = req.params
    const q = "DELETE FROM brand WHERE `idmarque` = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your brand!");

      return res.json("Brand has been deleted!");
    });

} 