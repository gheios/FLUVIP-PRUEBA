const { Router } = require("express");
const {getPersonasDB,createPersona , deletePersona} = require("../controllers/personas.controller");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", getPersonasDB);
router.post("/", createPersona );
router.delete("/:id",  deletePersona);
module.exports = router;
