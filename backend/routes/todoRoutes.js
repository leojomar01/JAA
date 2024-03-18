const {getTodos} = require('../controllers/todoController')

const router = require("express").Router();


router.get("/getTodos",getTodos)

module.exports = router;