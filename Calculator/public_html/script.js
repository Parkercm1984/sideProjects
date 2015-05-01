/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */

//global Var
var additionStorage;


//functions
function numberInput(thisObj){
    var prevOutput = "";
    var newOutput = thisObj.innerHTML;
            
    prevOutput = document.getElementById("calcOutput").value;
    if (prevOutput === "0"){
        document.getElementById("calcOutput").value = newOutput; 
    }
    else{
        document.getElementById("calcOutput").value = prevOutput + newOutput ;
    }
};

function additionOperation(){
    var numToAdd;
  
    if (additionStorage === undefined){
        additionStorage = document.getElementById("calcOutput").value;
        document.getElementById("calcOutput").value = "0";
    }
    else {
        
        numToAdd = document.getElementById("calcOutput").value;
        document.getElementById("calcOutput").value = parseFloat(numToAdd) + 
                parseFloat(additionStorage);
        additionStorage= undefined;
    }
  
    
};
