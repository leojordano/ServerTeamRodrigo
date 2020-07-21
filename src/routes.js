const express = require('express')

const usersCtrl = require('./controllers/usersControllers')
const authCtrl = require('./controllers/authController')

const Router = express.Router()

Router.get('/', usersCtrl.module.index)
Router.post('/register', usersCtrl.module.create)
Router.delete('/users/:user', usersCtrl.module.delete)
Router.get('/users/:user', usersCtrl.module.findOne)

Router.post('/login', authCtrl.module.login)

module.exports = Router