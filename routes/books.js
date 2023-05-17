const express = require ('express')
const router = express.Router()

const readListCtrl = require('../controllers/books')

router.get('/', readListCtrl.index)
router.get('/new', readListCtrl.newReadList)
router.post('/', readListCtrl.create)
router.get('/:id',readListCtrl.show)
router.get('/:id/edit',readListCtrl.updateReadListForm)
router.put('/:id/',readListCtrl.update)
router.delete('/:id/',readListCtrl.deleteReadList)


module.exports = router 