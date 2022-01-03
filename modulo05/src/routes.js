const express = require('express');
const teachers = require('./app/controllers/teachers')
const students = require('./app/controllers/students')
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


routes.get('/students', students.index) 
routes.get('/students/create', students.create)
routes.get('/students/:id', students.show) 
routes.get('/students/:id/edit', students.edit)
routes.put('/students', students.put)
routes.post('/students', students.post)
routes.delete('/students', students.delete)

module.exports = routes