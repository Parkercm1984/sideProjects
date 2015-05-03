/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */

//global Var
var additionStorage;
var operatorTest = false;


//functions
function numberInput(thisObj){
    var prevOutput = "";
    var newOutput = thisObj.innerHTML;
    
    if (operatorTest === true){
        document.getElementById("calcOutput").value = "";
        operatorTest = false;
    }
    prevOutput = document.getElementById("calcOutput").value;
    if (prevOutput === ""){
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
        operatorTest = true;
    }
    else {
        
        numToAdd = document.getElementById("calcOutput").value;
        document.getElementById("calcOutput").value = parseFloat(numToAdd) + 
                parseFloat(additionStorage);
        additionStorage= document.getElementById("calcOutput").value;
        operatorTest = true;
    }
  
    
};
