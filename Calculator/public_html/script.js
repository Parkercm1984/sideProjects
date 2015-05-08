/* 
Program: Basic calculator program 
Programmer: Craig Parker
 */

//global Var
var numStorage, prevOperation;
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
            case "Enter":
                numStorage= document.getElementById("calcOutput").value;
                prevOperation = newOperator;
                operatorTest = true;
                break;
        }
        
    }  
   
}
//event listeners
$(".calcNumbers").click(function(){
    var currentNumber = this.innerHTML;
    numberToInput(currentNumber);
});

$(".calcUtility").click(function(){
   alert("Hello!" + this.innerHTML); 
});

$(".operations").click(function(){
    var currentOperation = this.innerHTML;
    operationToExecute(currentOperation);
});
