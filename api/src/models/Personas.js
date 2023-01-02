const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("personas", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    cedula: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
      
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
