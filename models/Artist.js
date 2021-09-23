const mongoose = require('mongoose')

// Schema 
const artistSchema = new mongoose.Schema({
    artistName: {type: String, required: true},
    genre: {type: String, required: true},
    location: {type: String, required: true},
    spotify: {type: String, required: true},
})


const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist