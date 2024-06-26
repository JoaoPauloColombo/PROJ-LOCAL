const { Router } = require("express");
const locationController = require('../controller/locationController');
const router = Router();

router.get('/', locationController.getHome);
router.get('/contato', locationController.getContact);
router.get('/home', locationController.getHome);
router.get('/location', locationController.getAllLocation);
router.get('/localizacao', locationController.getLocalizacao);
router.get('/newContact', locationController.getNewContact);
router.post('/newContact', locationController.postNewContact);

module.exports = router;
