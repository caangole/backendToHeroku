// llamamos al router de express
const router = require('express').Router();
//Llamamos al controlador
const articuloController = require('../../controllers/ArticuloController.js');
//llamamos el middleware
const auth = require('../../middlewares/auth');

//rutas con restricción de acceso
router.get('/list', auth.verificarAdministrador, articuloController.list);
router.post('/add', auth.verificarAdministrador, articuloController.add);
router.put('/update', auth.verificarAdministrador, articuloController.update);
router.put('/activate', auth.verificarAdministrador, articuloController.activate);
router.put('/deactivate', auth.verificarAdministrador, articuloController.deactivate);


module.exports = router;