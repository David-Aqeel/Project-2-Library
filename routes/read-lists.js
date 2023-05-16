const express = require ('express')
const router = express.Router()

const readListCtrl = require('../controllers/read-lists')

router.get('/', readListCtrl.index)

module.exports = router