function upload(){

let file =
document.querySelector("input").files[0];

if(file){

document.getElementById("msg").innerHTML =
file.name +
" uploaded successfully to cloud storage (Simulation)";

}

else{

document.getElementById("msg").innerHTML =
"Please select a file first";

}

}
