const fs = require('fs');
const data = require('../data.json')
const { date, grade} = require('../utils')


exports.index = function (req, res) {

       return res.render("students/index", {students: data.students})
}
exports.create = function(req, res){
    return res.render('students/create')
}
exports.post = function(req, res){

        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }

        let id = 1
        const lastStudent = data.students[data.students.length -1]

        if (lastStudent){
           id = lastStudent.id + 1
        }

        birth = Date.parse(req.body.birth)       

        data.students.push({
            id,
            ...req.body,
            birth,
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
            if(err) return res.send('Falha ao enviar dados');

            return res.redirect("students")
        })
    
        //return res.send(req.body)
    }
exports.show = function(req, res){
    const {id} = req.params
    
    const foundStudent = data.students.find(function(student){
        return student.id == id
    })
    if(!foundStudent){
        return res.send("Student not found")
    }
    
    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        schoolYear: grade(foundStudent.schoolYear)      
    }

    return res.render('students/show', {student})
      
    }
exports.edit = function(req,res){
    const {id} = req.params

    const foundStudent = data.students.find(function(student){
        return student.id == id
    })
    if(!foundStudent){
        return res.send("Student not found")
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso,
        schoolYear: grade(foundStudent.schoolYear),
    }

    return res.render("students/edit", {student})
}
exports.put = function(req, res){
    const {id} = req.body

    let index = 0 
    const foundStudent = data.students.find(function(student, foundIndex){
        if(id == student.id){
            index = foundIndex
            return true
        }
    })
    if(!foundStudent){
        return res.send("Student not found")
    }

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.students[index] = student

    fs.writeFile('data.json', JSON.stringify(data,null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`students`)
    })

}
exports.delete = function(req, res){
    const {id} = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })
    data.students = filteredStudents;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write File error: " + err)

        return res.redirect("students")
    })
}