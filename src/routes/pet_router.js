const express = require('express');
const pet_controller = require('../controllers/pet_controller.js');
const router = express.Router();

router.post('/', pet_controller.store);

router.get('/', pet_controller.index);

router.get('/:id', pet_controller.show);

router.put('/:id', pet_controller.update);

router.delete('/:id', pet_controller.destroy);

module.exports = router;