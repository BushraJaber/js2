var data=" ";
var lang=['c++' , 'java' , 'css'];
for (var i=0; i<lang.length; i++){
    data+= "<li> " + lang[i] + "</li>";
console.log(lang[i]);
}
document.querySelector("h2").textContent=" My Love languages :";

document.querySelector("ul").innerHTML= data;
