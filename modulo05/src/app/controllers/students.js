const Student = require('../models/Student')
const {date, grade} = require('../../lib/utils')

module.exports = {

    post(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
        }

        Student.create(req.body, function(student){
            return res.redirect(`/students/${student.id}`)

        })
    },
    index(req, res){
        
        let {filter, page, limit, total} = req.query

        page = page || 1
        limit = limit || 5
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            total,
            callback(students){

                const pagination = {
                    
                    total: Math.ceil(students[0].total / limit),
                    page
                }
                return res.render("students/index", {students, pagination, filter})
            }
        
        }


        Student.paginate(params)
    },
    create(req, res){

        Student.teachersSelectOptions(function(options){
            return res.render('students/create', {teachersOptions: options})
        })
    },
    show(req, res){
        Student.find(req.params.id, function(student){
            if(!student) return res.send("Student not found!")

            student.birth = date(student.birth).birthDay
            student.school_year = grade(student.school_year)


            return res.render("students/show", {student})
        })
    },
    edit(req, res){

        Student.find(req.params.id, function(student){
            if(!student) return res.send("Student not found!")

            student.birth = date(student.birth).iso

            Student.teachersSelectOptions(function(options){
                return res.render('students/edit', {student, teachersOptions: options})
            })
        })
        
    },
    put(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }
        Student.update(req.body, function(){
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res){
        Student.delete(req.body.id, function(){
            return res.redirect(`/students`)
        })
    }
}
