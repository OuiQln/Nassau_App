const db = require ('../database/index.js');

const getItem = (req, res) => {
  db.findOne({_id: req.params.id})
  .then(item => {
    res.json(item)
  })
  .catch(error => {
    res.status(400).send(`error processings request: ${error}`)
  })
};

module.exports = {getItem}