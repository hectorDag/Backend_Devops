const express = require('express')
const router = express.Router()
const upload = require('../libs/storage')
const {setNoticia, getNoticas, getNoticasById, deleteNoticia, updateNoticia} = require('../controllers/newsControlles')

router.post('/', upload.single('image'), setNoticia)
router.get('/', getNoticas )
router.get('/:id', getNoticasById)
router.put('/:id', upload.single('image'), updateNoticia)
router.delete('/:id', deleteNoticia)

module.exports = router