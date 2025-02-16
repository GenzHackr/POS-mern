 const express = require ('express')
 const { getItemController, addItemController , editItemController, deleteItemController} = require('../controllers/itemController')

 const router = express.Router()

 //routes
 //methods - get

 router.get('/get-item', getItemController);

//method - post

router.post('/add-item', addItemController);

//method - PUT
router.put('/edit-item', editItemController);

router.post("/delete-item", deleteItemController);

 module.exports = router