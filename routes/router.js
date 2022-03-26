// const req = require('express/lib/request')

const router = require('express').Router();
const controller = require('../controller/controller');
const auth = require('../middleware/auth')


router.post('/visitor/register', controller.register);
router.post('/visitor/login', controller.login);
router.delete('/visitor/delete', auth, controller.delete);

module.exports = router;