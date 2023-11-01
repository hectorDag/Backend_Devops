const express = require('express')
const router = express.Router()
const {setNoticia, getNoticas, getNoticasById, deleteNoticia, updateNoticia} = require('../controllers/newsControlles')

router.post('/', setNoticia)
router.get('/', getNoticas )
router.get('/:id', getNoticasById)
router.put('/:id', updateNoticia)
router.delete('/:id', deleteNoticia)

module.exports = router