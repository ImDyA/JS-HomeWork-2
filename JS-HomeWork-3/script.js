alert("The task-1");
let numberOne = Number(prompt("Number one is?"));
let numberTwo = Number(prompt("Number two is?"));

if((numberOne == "" || null) || (numberTwo == "" || null)){
    alert("Вы не ввели число или нажали отмена");
}else if(numberOne > numberTwo){
    alert(`${numberOne} > ${numberTwo}`);
}else if(numberOne < numberTwo){
    alert(`${numberOne} < ${numberTwo}`);
}else{
    alert(`${numberOne} = ${numberTwo}`);
}

alert("The task-2");
let calculatorNumberOne = Number(prompt("Number one of calculator is?"));
let calculatorNumberTwo = Number(prompt("Number two of calculator is?"));
let calculatorValue = prompt("Enter value is + or - or * or /");
let calculatorResult;

switch(calculatorValue){
    case calculatorValue = "+":
        calculatorResult = calculatorNumberOne + calculatorNumberTwo;
        alert(calculatorResult);
        break;
    case calculatorValue = "-":
        calculatorResult = calculatorNumberOne - calculatorNumberTwo;
        alert(calculatorResult);
        break;
    case calculatorValue = "*":
        calculatorResult = calculatorNumberOne * calculatorNumberTwo;
        alert(calculatorResult);
        break;
    case calculatorValue = "/":
        calculatorResult = calculatorNumberOne / calculatorNumberTwo;
        alert(calculatorResult);
        break;
    default:
        alert("Вы ввели неправилльное значение");
}

alert("The task-3");
let ageVisiter = Number(prompt("Your age"));

if((ageVisiter > 60) || (ageVisiter < 18)){
    let parents = confirm("Parents ok?");
    if(parents){
        alert("Взрослые дали согласие проход разрешен");
    }else{
        alert("Взрослые не дали согласие");
    }
}else if((ageVisiter >= 18) && (ageVisiter < 60)){
    alert("Возраст соответсствует требованиям проходите");
}else{
    alert("Вы ввели неправильные данные");
}