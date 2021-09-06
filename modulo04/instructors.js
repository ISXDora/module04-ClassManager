const fs = require('fs');
const data = require('./data.json')



//SHOW

exports.show = function(req, res){
    const {id} = req.params

    const foundTeacher = data.instructors.find(function(teacher){
        return teacher.id == id
    })
    if(!foundTeacher){
        return res.send("Teacher not found")
    }

    return res.render('instructors/show', {teacher: foundTeacher })
  
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