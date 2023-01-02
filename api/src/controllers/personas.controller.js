const { Personas } = require("../db");

const getPersonasDB = async (req, res) => {
  try {
    const personas = await Personas.findAll();
    res.json(personas);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const createPersona = async (req, res) => {
  const { name, age, cedula, direccion } = await req.body;
  console.log(req.body);
  console.log(name);

  try {
    const newPersona = await Personas.create({
      name: name,
      age: age,
      cedula: cedula,
      direccion: direccion,
    });

    res.json(newPersona);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const deletePersona = async (req, res) => {
  const {id} = req.params;
  console.log(id);
  try {
    await Personas.destroy({
      where: {
        id
      },
    });
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPersonasDB,
  createPersona,
  deletePersona,
};
