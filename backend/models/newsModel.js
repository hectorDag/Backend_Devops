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
    author: {
        type: String,
        required: [true, 'Tecle Anonimo o el nombre del autor'],
    }
},{
    timestamps: true
})

module.exports = mongoose.model('New', newsSchema)