var wrap = document.body.querySelector(".wrapper");

var p = 0;
var d = 0;

while(p <= 5 || d <= 10){
  var hits = Number(prompt("How many hits would you like to take 1-5?"));
if(hits <=5){
  d += Math.floor(Math.random() * hits) + 1;
}else{
  d += 1
}
p += Math.floor(Math.random() * 2) + 1;
  if(p >= 5){
  break;
}else if(d >=10){
break;
}
}

if(p >= 5){
  wrap.innerHTML= "Player damage: " + p +"<br>" +"Dragon damage: " + d +"<br>"+ " User loses!";
}else{
wrap.innerHTML= "Player damage: " + p +"<br>" +"Dragon damage: " + d +"<br>"+ " Dragon loses!";
}