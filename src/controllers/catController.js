const connection = require('../../db/db');

exports.createCategory = async (req, res) => {
const {category} = req.body
const sql = "SELECT * FROM `categorie` WHERE category	 =?";
connection.query(sql, [category	], (error,data) =>{
  if(error) return res.json(error);
  if(data.length>0){
       return res.status(422).json("Cette catégorie existe déjà!");
  }else{
    const q = "INSERT INTO categorie(`category`) VALUES (?)";
    const values = [category];
    connection.query(q, [values], (err, data) => {
   if (err) return res.status(500).json(err);
   return res.status(201).json("Category has been created.");
})
  }  
}) 

}

exports.getAllCategory = async (req, res) => {
    const q = "SELECT * FROM categorie";
    connection.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.length ==0) return res.status(404).json('Category not found!')
    return res.status(200).json(data);
  });
}

 exports.getCategory= async (req, res) => {
    const { id } = req.params
    const q = "SELECT  `category` FROM categorie  WHERE idcategorie = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Category not found!')
      return res.status(200).json(data);
    });
}

exports.updateCategory= async (req, res) => {
    const { id } = req.params
    const {category} = req.body
    const q="UPDATE categorie SET `category`=? WHERE `idcategorie` = ?";
    const values = [category];

    connection.query(q, [...values, id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length ==0) return res.status(404).json('Category not found!')
      return res.json("Category has been updated.");
    });
}

exports.deleteCategory= async (req, res) => {
    const { id } = req.params
    const q = "DELETE FROM categorie WHERE `idcategorie` = ?";

    connection.query(q, [id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your category!");

      return res.json("Category has been deleted!");
    });

} 