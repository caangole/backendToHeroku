// llamamos al router de express
const router = require('express').Router();
//Llamamos al controlador
const usuarioController = require('../../controllers/UsuarioController.js');
//llamamos el middleware
const auth = require('../../middlewares/auth');

//rutas con restricción de acceso
router.post('/register', auth.verificarAdministrador, usuarioController.register);
router.put('/update', auth.verificarAdministrador, usuarioController.update);
router.get('/list', usuarioController.listar);
router.put('/activate', auth.verificarAdministrador, usuarioController.activate);
router.put('/deactivate', auth.verificarAdministrador, usuarioController.deactivate);

//ruta login sin restricción de acceso
router.post('/login', usuarioController.login);

module.exports = router;