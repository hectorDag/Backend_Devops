const asyncHandler = require('express-async-handler')
const Noticia = require('../models/newsModel')

const setNoticia = asyncHandler( async (req, res) => {
    const noticia = await Noticia.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        author: req.body.author
    })

    res.status(201).json('Noticia creada correctamente')
})

module.exports = {
    setNoticia
}