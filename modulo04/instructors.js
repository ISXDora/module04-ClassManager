const fs = require('fs');
const data = require('./data.json')
const {age, date} = require('./utils')



//SHOW

exports.show = function(req, res){
    const {id} = req.params

    const foundTeacher = data.instructors.find(function(teacher){
        return teacher.id == id
    })
    if(!foundTeacher){
        return res.send("Teacher not found")
    }

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        services: foundTeacher.services.split(", "),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
    }

    return res.render('instructors/show', {teacher})
  
    }

 
// CREATE
exports.post = function(req, res){

        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }
        let {avatar_url, name, birth, schooling, modality, services} = req.body

        birth = Date.parse(birth)
        const created_at = Date.now()
        const id = Number(data.instructors.length+1)

        data.instructors.push({
            avatar_url,
            name,
            birth,
            schooling,
            modality,
            services, 
            created_at,
            id
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
            if(err) return res.send('Falha ao enviar dados');

            return res.redirect("instructors")
        })
    
        //return res.send(req.body)
    }

//=============================================EDIT ====================================================================================================
exports.edit = function(req,res){
    const {id} = req.params

    const foundTeacher = data.instructors.find(function(teacher){
        return teacher.id == id
    })
    if(!foundTeacher){
        return res.send("Teacher not found")
    }

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("instructors/edit", {teacher})
}
//========================PUT================================================

exports.put = function(req, res){
    const {id} = req.body

    let index = 0 
    const foundTeacher = data.instructors.find(function(teacher, foundIndex){
        if(id == teacher.id){
            index = foundIndex
            return true
        }
    })
    if(!foundTeacher){
        return res.send("Teacher not found")
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.instructors[index] = teacher

    fs.writeFile('data.json', JSON.stringify(data,null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`/instructors/${id}`)
    })

}

exports.delete = function(req, res){
    const {id} = req.body

    const filteredTeachers = data.instructors.filter(function(teacher){
        return teacher.id != id
    })
    data.instructors = filteredTeachers;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write File error: " + err)

        return res.redirect("/instructors")
    })
}