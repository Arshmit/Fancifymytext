function alertfunction() {
  document.getElementById("Text").style.fontSize = "24pt";
}

function alertfunction2() {
  document.getElementById("Text").style.fontWeight = "bold";
  document.getElementById("Text").style.color = "blue";
  document.getElementById("Text").style.textDecoration = "underline";
  
  
}

function alertfunction3() {
  document.getElementById("Text").style.fontWeight = "normal";
}

function alertfunction4() {
  var text = document.getElementById("Text");
  text.value = text.value.toUpperCase();
  text.value += '-Moo';
}