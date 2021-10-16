const express = require('express');
const teachers = require('./controllers/teachers')
const members = require('./controllers/members')
const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect("teachers")
})

routes.get('/teachers', teachers.index) 
routes.get('/teachers/create', teachers.create)
routes.get('/teachers/:id', teachers.show) 
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers', teachers.put)
routes.post('/teachers', teachers.post)
routes.delete('/teachers', teachers.delete)


routes.get('/members', members.index) 
routes.get('/members/create', members.create)
routes.get('/members/:id', members.show) 
routes.get('/members/:id/edit', members.edit)
routes.put('/members', members.put)
routes.post('/members', members.post)
routes.delete('/members', members.delete)

module.exports = routes