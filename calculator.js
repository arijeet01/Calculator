const express=require("express");
//const bodyParser=require("body-parser");  depreciated

const app=express();
app.use(express.urlencoded({extended: true}));   // bodyParser.urlencoded depriciated

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req, res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum=num1+num2;
    res.send("Your Result: "+sum);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/bmicalculator", function(req, res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi=weight/(height*height);
    res.send("Your BMI is: "+bmi);
});

app.listen(3000, function(){
    console.log("Server started");
});