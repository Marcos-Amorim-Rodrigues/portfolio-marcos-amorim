let bpDiv = document.getElementById("brasil-paralelo");
let dtDiv = document.getElementById("do-this");
let ptDiv = document.getElementById("portfolio"); 
function mostrarBP(){
  bpDiv.style = "display:block";
  dtDiv.style = "display:none";
  ptDiv.style = "display:none";
}
function mostrarDT(){
  bpDiv.style = "display:none";
  dtDiv.style = "display:block";
  ptDiv.style = "display:none";
}
function mostrarPT(){
  bpDiv.style = "display:none";
  dtDiv.style = "display:none";
  ptDiv.style = "display:block";
}

