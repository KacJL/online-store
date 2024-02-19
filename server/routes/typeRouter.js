const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const CheckRole= require("../middleware/CheckRoleMiddleware")


router.post('/',CheckRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router