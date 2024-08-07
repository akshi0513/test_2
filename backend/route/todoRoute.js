const express = require ('express');
const router = express.Router();
const controllers = require ('../controllers/todoContoller');

router.get('./getTodo', controllers.getTodo);
router.post('/createTodo', controllers.createTodo);

module.exports=router;
