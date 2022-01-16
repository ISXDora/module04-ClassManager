const Teacher = require('../models/Teacher')
const {date, age} = require('../../lib/utils')

module.exports = {

    post(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
        }

        Teacher.create(req.body, function(teacher){

            return res.redirect(`/teachers/${teacher.id}`)

        })
    },
    index(req, res){
        Teacher.all(function(teachers){
            return res.render("teachers/index", {teachers} )
        })
    },
    create(req, res){
        return res.render('teachers/create')
    },
    show(req, res){
        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send("Teacher not found!")

                teacher.birth_date = age(teacher.birth_date)
                teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/show", {teacher})
        })
    },
    edit(req, res){

        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send("Teacher not found!")

                teacher.birth_date = date(teacher.birth_date).iso
                teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/edit", {teacher})
        })
        
    },
    put(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }
        Teacher.update(req.body, function(){
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res){
        Teacher.delete(req.body.id, function(){
            return res.redirect(`/teachers`)
        })
    }
}
