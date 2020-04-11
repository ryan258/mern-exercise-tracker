const router = require('express').Router()
let User = require('../models/user.model')

// This is the first route
router.route('/').get((req, res) => {
    User.find() // will get a list of all the users from the mongoDB database
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

// This will handle income POST requests
router.route('/add').post((req, res) => {
    const username = req.body.username
    // Creates a new instance of User
    const newUser = new User({
        username
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router