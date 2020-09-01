
var now = new Date(); 
function setDate() { 
var anchor = new Date(2017, 7, 21); 
return Math.round((now - anchor) / 1000 / 60 / 60/ 24/7); 
} 
function toSummer() { 
var summer = new Date(2018, 5, 1); 
return Math.round((summer-now) / 1000 / 60 / 60/ 24); 
} 

var elem = document.getElementById("date"); 
elem.innerText = 'Сейчас ' + setDate() + ' неделя\nДней до лета: '+toSummer(); 
