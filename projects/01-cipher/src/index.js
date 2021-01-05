//import cipher from './cipher.js';

const intro = document.getElementById("intro");
const chrono = document.getElementById("chrono");
const decodepage = document.getElementById("decodepage");


//Hidding elements 
document.getElementById("chrono").style.display = "none";
document.getElementById("form").style.display = "none";
document.getElementById("decodepage").style.display = "none";
document.getElementById("form2").style.display="none";



//Call"chrono" container after clicking button start
//The function substituites intro id for chronos id and then hides the button start
document.getElementById("start").onclick = function(){ 
 document.getElementById("intro").innerHTML = document.getElementById("chrono").innerHTML;
 document.getElementById("start").style.display = "none";
 document.getElementById("form").style.display = "block";
}

//Alert function with instruction-clue message located in a hidden button on chrono id
function alertFunction() {
  alert("Antes de recibir la información,  Anónimos Latinoamerica solicita que te identifiques, pero ¡CUIDADO! Recuerda que ésta información puede ser hackeada. Cifra tu nombre, che.");
}


//chronometer codepen formula
var sec = 1800,
    countDiv = document.getElementById("timer"),
    secpass,
    countDown = setInterval(function () {
        'use strict';
        secpass();
    }, 1000);

function secpass() {
    'use strict';
     var min = Math.floor(sec / 60),
        remSec = sec % 60;
    
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
         min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
     if (sec > 0) {
         sec = sec - 1;
        
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'Mission failed';     

  }
}


let string = "CHEGUEVARA";
let offset = 3;
let result = [];

let encode = function() {
  for(let i=0; i < string.length; i++){
    let char = string[i].charCodeAt() + offset;
    result += String.fromCharCode(char);
  }; 
  console.log(result);
};
encode(); 


let password = result;

const dpage = document.getElementById("decodepage");
dpage.style.display = "none";
const face = document.getElementsByClassName("face");
const cbutton = document.getElementById("instructions");
const container = document.getElementById("container");

form.addEventListener("submit", enviar);

function enviar(event) {
  event.preventDefault();
  let str = document.getElementById("str").value;
  
  if (str === password){
    console.log(str);
    dpage.style.display = "block"; 
    container.style.display = "none";  
    cbutton.style.display = "none";
    
  }
  if (str != password) {
    console.log(str);

    let text = "Wrong ID";
    document.getElementById("strtext").innerHTML = text;
  };
  
}

function send() {
  let answerBox1 = sfile.value;
  let answerBox2 = access.value;
  
  if (answerBox1 == "USPRIVATEHEALTHSERVICE1798"){
    text1 = "Sending file...";
    document.getElementById("filename").innerHTML = text1;
  }else{ 
    text1 = "Incorrect file name";
    document.getElementById("filename").innerHTML = text1;
  }
  
  if (answerBox2 == "GIVEMETHEMONEY") {
    text2 = "ACCESS APPROVED";
    document.getElementById("filename2").innerHTML = text2;
  
  }else{  
    text2 = "ACCESS DENIED";
    document.getElementById("filename2").innerHTML = text2;  
  }  

}

document.getElementById("buttonFiles").addEventListener("click", send);

document.getElementById("hiddenbutton").onclick = function(){ 
  document.getElementById("form2").style.display = "block";
  document.getElementById("chrono").style.display = "none";
 }


 let caesar = function decode (str, offset) {

  let output2 = "";

  for (var i = 0; i < str.length; i++) {
  
  let c = str[i];

    if (c.match(/[a-z]/i)) {

      let code = str.charCodeAt(i);

      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code + 65 + offset) % 26) + 65);

      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code + 97 + offset) % 26) + 97);
    }

    output2 += c;
  }

  return output2;
};



const form2 = document.getElementById("form2");
      form2.addEventListener("submit", handleSubmit);

      function handleSubmit(event) {
        event.preventDefault();
        let str2 = document.getElementById("str2").value;
        let offset2 = parseInt(document.getElementById("offset2").value);
        let output2 = document.getElementById("output2");
        console.log(offset2);
        if (!offset2) {
          output2.innerHTML = `<span style="color: red">Amount not valid</span>`;
          return;
        }
        output2.innerHTML = caesar(str2, parseInt(offset2));
      }












//console.log(cipher);

