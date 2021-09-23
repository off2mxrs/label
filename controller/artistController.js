const express = require('express')
const router = express.Router();

// MONGOOSE DATABASE ///////////
const db = require('../models/index')

// base route '/label' //// 
///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    db.Artist.find({}, (err, allArtists) => {
        if (err) return console.log(err)
        res.render('index.ejs', {allArtists: allArtists})
        console.log(allArtists);
    })
    // res.send('index')
    // res.render('index.ejs')
})

///////// 🆕 NEW ROUTE //////////////()
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

module.exports = router;