const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const posts = require("./data")

server.set("view engine", "njk");

server.use(express.static('public'))

nunjucks.configure("views", { 
    express:server,
    noCache: true,
    autoespace: false
});
server.get("/", function(req, res) {
       return res.render("courses", { posts })
});
server.get("/about", function(req, res) {
    const data = {
        logoImg: "/logoRocket.jpeg",
        nome: "Rocketseat",
        slogan: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. Conheça os nossos programas de estudo.",
        list:[
            {name: "Discover"},
            {name: "Ignite"},
            {name: "Expert Club"}
        ]

    }
    return res.render("about", { data } )
});
server.get("/courses", function(req, res) {
    return res.render("courses", { posts})
});


server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    const post = posts.find(function(post){
        console.log(post, id)
         if(post.id == id){
            return true
        }
        if(!post) {
            return res.send("Post not found")
        }
    })

    return res.render("post", {post})
}) 

server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(5000, function () {
    console.log('Server is running');
});