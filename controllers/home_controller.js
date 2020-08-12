const Todo = require("../models/todo");
const Category = require("../models/category");


module.exports = {
    home : function(req, res) {
        
        return res.render('home', {
            title: "Home"
        });
    }
    
};

