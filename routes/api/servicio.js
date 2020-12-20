// llamamos al router de express
const router = require('express').Router();
//Llamamos al controlador
const servicioController = require('../../controllers/ServicioController.js');
//llamamos el middleware
const auth = require('../../middlewares/auth');

//rutas con restricción de acceso
router.get('/list', servicioController.list);
router.post('/add', servicioController.add);
router.put('/update', servicioController.update);
// router.put('/activate', servicioController.activate);
// router.put('/deactivate', servicioController.deactivate);


module.exports = router;