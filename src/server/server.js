//Require Express to run server and routes
const express =require('express');
//set up an instance of app
const app=express();
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require("cors")
app.use(cors());
app.use(express.static('dist'))
app.get('/', function (req, res) {
    res.status(200).res.sendFile('dist/index.html')
})
//set up server
app.listen(8080,function(){
    console.log('server is running at port 8080')
});



//POST ROUTE
let projectData={};
app.post("/add",addData);
function addData(req, res) {
    projectData.from=req.body.from;
    projectData.to=req.body.to;
    projectData.date=req.body.date;
    projectData.days_away=req.body.days_away;
    projectData.image=req.body.image;
    projectData.temp=req.body.temp;
    projectData.condition=req.body.condition;
    res.send(projectData);
    console.log(projectData);
};
app.get("/all", getData);
function getData(req, res){
res.send(projectData);
console.log(projectData);
return projectData;
};


module.exports = app;