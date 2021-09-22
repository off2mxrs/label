const express = require('express')
const router = express.Router();

// MONGOOSE DATABASE ///////////
const db = require('../models/index')

// base route '/label' //// 
///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    // db.User.find({}, (err, allArtists) => {
    //     if (err) return console.log(err)
    //     res.render('index.ejs', {allArtists: allArtists})
    // })
    res.send('index')
    
})


module.exports = router;