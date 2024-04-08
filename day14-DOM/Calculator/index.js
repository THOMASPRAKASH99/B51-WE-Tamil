let screen = "";

function updateDisplay(){
    document.getElementById('display').value = screen;
}

function appendNumber(num){
    screen = screen+num;
    updateDisplay();
}
function appendOperator(operator){
    screen = screen+operator;
    updateDisplay();
}

function calculator(){
   
    try {
        screen = eval(screen);
        updateDisplay();
    } 
    
    catch (error) 
    {
     alert ("Invalid Oprerator");   
    }
}

function clearDisplay(){
    screen = "";
    updateDisplay();
}

function del(){
    screen = screen.slice(0,-1);
    updateDisplay();
}

