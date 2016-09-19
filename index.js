var express = require('express');
var app = express();

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
  res.send('<h1>All Bears</h1>');
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










app.listen(3000 , function(){
  console.log('app running on port 3000');
});
