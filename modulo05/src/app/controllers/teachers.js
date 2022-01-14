const {date, age} = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {

    post(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }
        
        const query = `
        INSERT INTO teachers (
            avatar_url,
            name,
            birth_date,
            education_level,
            class_type,
            subjects_taught,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `
        const values = [
            req.body.avatar_url,
            req.body.name,
            date(req.body.birth_date).iso,
            req.body.education_level,
            req.body.class_type,
            req.body.subjects_taught,
            date(Date.now()).iso
        ]
    
        db.query(query, values, function(err, results){
            if(err) return res.send("Database Error!")
    
            return res.redirect(`/teachers/${results.rows[0].id}`)
        })
    },
    index(req, res){
        return res.render("teachers/index")
    },
    create(req, res){
        return res.render('teachers/create')
    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
        const keys = Object.keys(req.body)
    
        for (key of keys){
            if(req.body[key]==""){
                return res.send("Por favor, prencha todos os campos.")
            }
    
        }
        return
    },
    delete(req, res){
        return
    }
}
