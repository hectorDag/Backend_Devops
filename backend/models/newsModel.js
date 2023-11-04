const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Teclea el Titulo']
    },
    subtitle: {
        type: String,
        required: [true, 'Teclea el Subtitulo']
    },
    content: {
        type: String,
        required: [true, 'Teclea el contenido']
    },
    imgUrl: {
        type: String
    },
    author: {
        type: String,
        required: [true, 'Tecle Anonimo o el nombre del autor']
    }
},{
    timestamps: true
})

newsSchema.methods.setImgUrl = function setImgUrl (filename) {
 const PORT = process.env.PORT
 const APP_HOST = process.env.APP_HOST
 this.imgUrl = `${APP_HOST}:${PORT}/public/${filename}`
}

module.exports = mongoose.model('New', newsSchema)