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
    image: {
        type: String,
        required: [true, 'Proporciona la URL de la imagen']
    },
    image2: {
        type: String,
        required: [true, 'Proporciona la URL de la Segunda imagen']
    },
    author: {
        type: String,
        required: [true, 'Tecle Anonimo o el nombre del autor'],
    }
},{
    timestamps: true
})

module.exports = mongoose.model('New', newsSchema)