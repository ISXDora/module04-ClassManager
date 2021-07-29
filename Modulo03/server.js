const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const posts = require("./data")

server.set("view engine", "njk");

server.use(express.static('public'))

nunjucks.configure("views", { 
    express:server
});
server.get("/", function(req, res) {
       return res.render("courses")
});
server.get("/about", function(req, res) {
    return res.render("about")
});
server.get("/courses", function(req, res) {
    return res.render("courses", { posts})
});


server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(5000, function () {
    console.log('Server is running');
});