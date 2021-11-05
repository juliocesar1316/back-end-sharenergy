const knex = require("../conexao");

const usuario = async (req, res) => {
  try {
    const data = await knex("users");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  usuario,
};
