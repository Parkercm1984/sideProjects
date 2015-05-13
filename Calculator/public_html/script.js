/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */

//global Var
var numStorage, prevOperation, calcMemory;
var operatorTest = false;


//functions
function numberToInput(currentNumber){
    var prevOutput = "";
    var newOutput = currentNumber;
    
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


function operationToExecute(currentOperation){
    var newOperator = currentOperation;   
    var numToOperateOn;
    
    if (prevOperation === undefined){
        prevOperation = currentOperation;
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
            case "=":
                numStorage= document.getElementById("calcOutput").value;
                prevOperation = newOperator;
                operatorTest = true;
                break;
        }
        
    }  
   
};//End operationToExecute function
function clearInput(){
    document.getElementById("calcOutput").value = "";
};
function saveToMemory(){
    calcMemory = document.getElementById("calcOutput").value;
};
    
function recallFromMemory(){
    if (calcMemory !== undefined){
       document.getElementById("calcOutput").value = calcMemory; 
   }
};

function clearFromMemory(){
    calcMemory = undefined;
}; 

//event listeners
$(document).ready(function(){
    
    $(".calcNumbers").click(function(){
        var currentNumber = this.innerHTML;
        numberToInput(currentNumber);
    });
    
    $("#clear").click(function(){
        clearInput(); 
    });
    
    $("#memoryClear").click(function(){
        clearFromMemory();
    });
       
    $("#memoryRecall").click(function(){
        recallFromMemory();
    });
    
    $("#memorySave").click(function(){
        saveToMemory();
    });
    
    $(".operations").click(function(){
        var currentOperation = this.innerHTML;
        operationToExecute(currentOperation);
    });
});
