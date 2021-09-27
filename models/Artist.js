const mongoose = require('mongoose')

// Schema 
const artistSchema = new mongoose.Schema({
    artistName:  String,
    genre:  String,
    location:  String,
    follow:  String,
    spotify:  String,
    images:  Array,
    gif:  String,
    video:  String,
    about:  String,
    tour:  String,
    merch:  String,
})


const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist