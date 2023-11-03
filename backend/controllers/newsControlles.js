const asyncHandler = require('express-async-handler')
const Noticia = require('../models/newsModel')

const setNoticia = asyncHandler( async (req, res) => {
    const noticia = await Noticia.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        image: req.body.image,
        image2: req.body.image2,
        author: req.body.author
    })

    res.status(201).json('Noticia creada correctamente')
})

const getNoticas = asyncHandler( async (req, res) => {
    const noticias = await Noticia.find()
    res.status(200).json(noticias)
})

const getNoticasById = asyncHandler( async (req, res) => {
    const noticias = await Noticia.findById(req.params.id)
    res.status(200).json(noticias)
})

const updateNoticia = asyncHandler(async (req, res) => {
    try {
      const updatedNoticia = await Noticia.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ) 
  
      if (!updatedNoticia) {
        res.status(404).json({ message: 'La noticia no fue encontrada' }) 
      } else {
        res.status(200).json(updatedNoticia) 
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la noticia' }) 
    }
  }) 

const deleteNoticia = asyncHandler( async (req, res) => {

    const noticia = await Noticia.findById(req.params.id)

    if(!noticia){
      res.status(404)
      throw new Error ('La Tarea no fue encontrada')
    }

    noticia.deleteOne()

    res.status(200).json('Noticia Borrada')
})

module.exports = {
    setNoticia,
    getNoticas,
    getNoticasById, 
    updateNoticia,
    deleteNoticia
}