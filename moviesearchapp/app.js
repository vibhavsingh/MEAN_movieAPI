var express = require("express");
var request = require("request");

var app= express();
app.set('view engine','ejs');
app.get("/", function(req,res){
   res.render("search"); 
});



app.get("/results",function(req,res){
var query= req.query.search; var url="http://www.omdbapi.com/?apikey=thewdb&s="+ query;
    request(url,function(err,response,body){
        if(!err && res.statusCode == 200){
            var data=JSON.parse(body);
            res.render("results",{data:data});
        }
    });
});




app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Movie check started");
    
});