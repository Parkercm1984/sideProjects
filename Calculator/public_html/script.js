/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */




function numberInput(){
    var prevOutput = "";
    var newOutput = "1";
            
    prevOutput = document.getElementById("calcOutput").value;
    if (prevOutput === "0"){
     document.getElementById("calcOutput").value = newOutput; 
    }
    else{
    document.getElementById("calcOutput").value = prevOutput + newOutput ;
    }
};