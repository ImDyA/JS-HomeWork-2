alert("The task-1");
let number_1 = Number(prompt("Number one is?"));
let number_2 = Number(prompt("Number two is?"));

if((number_1 == "" || null) || (number_2 == "" || null)){
    alert("Вы не ввели число или нажали отмена");
}else if(number_1 > number_2){
    alert("Number one > Number two");
}else if(number_1 < number_2){
    alert("Number one < Number two");
}else{
    alert("Number one = Number two");
}

alert("The task-2");
let calculatorNumber_1 = Number(prompt("Number one of calculator is?"));
let calculatorNumber_2 = Number(prompt("Number two of calculator is?"));
let calculatorValue = prompt("Enter value is + or - or * or /");
let calculatorResult;

switch(calculatorValue){
    case calculatorValue = "+":
        calculatorResult = calculatorNumber_1 + calculatorNumber_2;
        alert(calculatorResult);
        break;
    case calculatorValue = "-":
        calculatorResult = calculatorNumber_1 - calculatorNumber_2;
        alert(calculatorResult);
        break;
    case calculatorValue = "*":
        calculatorResult = calculatorNumber_1 * calculatorNumber_2;
        alert(calculatorResult);
        break;
    case calculatorValue = "/":
        calculatorResult = calculatorNumber_1 / calculatorNumber_2;
        alert(calculatorResult);
        break;
    default:
        alert("Вы ввели неправилльное значение");
}

alert("The task-3");
let ageVisiter = Number(prompt("Your age"));

if((ageVisiter > 60) || (ageVisiter < 18)){
    let parents = confirm("Parents ok?");
    if(parents == 1){
        alert("Взрослые дали согласие проход разрешен");
    }else{
        alert("Взрослые не дали согласие");
    }
}else if((ageVisiter >= 18) && (ageVisiter < 60)){
    alert("Возраст соответсствует требованиям проходите");
}else{
    alert("Вы ввели неправильные данные");
}