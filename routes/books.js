const express = require ('express')
const router = express.Router()

const bookCtrl = require('../controllers/books')

// localhost:3000/books/
router.get('/', bookCtrl.index)
router.post('/:listId', bookCtrl.addBook)
router.get('/:id',bookCtrl.show)
router.get('/:id/edit',bookCtrl.updateBook)
router.put('/:id/',bookCtrl.update)
router.delete('/:listId/:bookId',bookCtrl.deleteBook)


module.exports = router 