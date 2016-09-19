var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var bears = [
  {name : "Grizzly"},
  {name : "Polar"},
  {name : "Black"},
  {name : "Asian Black Bear"},
  {name : "Giant Panda"},
  {name : "Sloth Bear"},
  {name : "Chewbacca"}
]


app.get("/bears" , function(req,res,next) {

  res.send(bears);
});

app.get("/bears/:id", function (req,res,next){
  var id = req.params.id;
  var bear = '';
  if(parseInt(id) && id < bears.length){
    bear = bears[id];
    res.send('<h1>' + bear.name +'</h1>')
  }else{
    res.send('<h1> Bear not found </h1>')
  }
})

app.post("/bears", function (req,res,next){
  
  console.log(req.body.name);
  var newBear = {'name' : req.body.name};
  bears.push(newBear);
  res.send(newBear);

})










app.listen(3000 , function(){
  console.log('app running on port 3000');
});
