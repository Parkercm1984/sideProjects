/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */

//global Var
var numStorage, prevOperation;
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


function operation(thisOperator){
    var newOperator = thisOperator.innerHTML;   
    var numToOperateOn;
    
    if (prevOperation === undefined){
        prevOperation = thisOperator.innerHTML;
        numStorage = document.getElementById("calcOutput").value;
        operatorTest = true;
    }
    else{
    
    switch(prevOperation){
        
        case "+":
            numToOperateOn = document.getElementById("calcOutput").value;
            document.getElementById("calcOutput").value = parseFloat(numStorage) + 
                parseFloat(numToOperateOn);
            numStorage= document.getElementById("calcOutput").value;
            operatorTest = true;
            prevOperation = newOperator;
        break;    
            
        case "-":
            numToOperateOn = document.getElementById("calcOutput").value;
            document.getElementById("calcOutput").value = parseFloat(numStorage) - 
                parseFloat(numToOperateOn);
            numStorage= document.getElementById("calcOutput").value;
            operatorTest = true;
            prevOperation = newOperator;
            break;
        
        case "*":
           numToOperateOn = document.getElementById("calcOutput").value;
            document.getElementById("calcOutput").value = parseFloat(numStorage) * 
                parseFloat(numToOperateOn);
            numStorage= document.getElementById("calcOutput").value;
            operatorTest = true;
            prevOperation = newOperator;
            break;
        
        case "/":
            numToOperateOn = document.getElementById("calcOutput").value;
            document.getElementById("calcOutput").value = parseFloat(numStorage) / 
                    parseFloat(numToOperateOn);
            numStorage= document.getElementById("calcOutput").value;
            operatorTest = true;
            prevOperation = newOperator;
            break;  
        case "Enter":
            numStorage= document.getElementById("calcOutput").value;
            prevOperation = newOperator;
            operatorTest = true;
            break;
    }
        
    }  
   
}