const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      User                  = require("./models/user"),
      LocalStrategy         = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");
     
mongoose.connect("mongodb://localhost/autho_demo"); 

const app = express();
app.set('view engine', 'ejs');
//Setting passport up to work in the app. 2 lines below are required when using passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started..");
});