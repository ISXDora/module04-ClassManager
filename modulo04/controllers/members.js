const fs = require('fs');
const data = require('../data.json')
const {age, date} = require('../utils')


exports.index = function (req, res) {

    //const dataService = data.members

    //const member = {
    //    ...dataService,
    //    services: dataService.services.split(", "),
    //}

   // console.log(member)
       return res.render("members/index", {members: data.members})
}
exports.show = function(req, res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })
    if(!foundMember){
        return res.send("Member not found")
    }

    const member = {
        ...foundMember,
        birth: age(foundMember.birth),
       
    }

    return res.render('members/show', {member})
  
    }
exports.create = function(req, res){
    return res.render('members/create')
}
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
        const id = Number(data.members.length+1)

        data.members.push({
            avatar_url,
            name,
            birth,
            modality, 
            created_at,
            id
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
            if(err) return res.send('Falha ao enviar dados');

            return res.redirect("members")
        })
    
        //return res.send(req.body)
    }
exports.edit = function(req,res){
    const {id} = req.params

    const foundMember = data.members.find(function(member){
        return member.id == id
    })
    if(!foundMember){
        return res.send("Member not found")
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }

    return res.render("members/edit", {member})
}
exports.put = function(req, res){
    const {id} = req.body

    let index = 0 
    const foundMember = data.members.find(function(member, foundIndex){
        if(id == member.id){
            index = foundIndex
            return true
        }
    })
    if(!foundMember){
        return res.send("Member not found")
    }

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
    }

    data.members[index] = member

    fs.writeFile('data.json', JSON.stringify(data,null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`members`)
    })

}
exports.delete = function(req, res){
    const {id} = req.body

    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })
    data.members = filteredMembers;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write File error: " + err)

        return res.redirect("members")
    })
}