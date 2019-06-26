const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
router.post('/register', function (req, res) {
    User.create(req.body)
    .then(user => res.status(200).send(user))
})
router.get('/test', function (req, res) {
    res.send("holanda")
})
router.get('/all', function (req, res) {
    console.log("ENTREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    User.findAll()
        .then((users) => {
            console.log(users)
            res.send(users)
        })
})

module.exports = router