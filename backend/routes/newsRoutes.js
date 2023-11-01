const express = require('express')
const router = express.Router()
const {setNoticia} = require('../controllers/newsControlles')

router.post('/', setNoticia)
router.get('/', )
router.get('/:id', )

module.exports = router