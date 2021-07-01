const standartFunction = function(){
    let firstNumber = Number(prompt("First number?"));
    let secondNumber = Number(prompt("Two number?"));
    let numberSumm = firstNumber + secondNumber;
    // Почему NaN не работает???
    if((firstNumber == "" || firstNumber == null) || (secondNumber == "" || secondNumber == null) || (numberSumm === NaN)){
        alert("Вы ввели неправильное значение или нажали отмена");
        return;
    }else{
        alert(numberSumm);
        return;
    }
}
const arrowFunction = () => {
    let firstNumber = Number(prompt("First number?"));
    let secondNumber = Number(prompt("Two number?"));
    let numberSumm = firstNumber + secondNumber;
    if((firstNumber == "" || firstNumber == null) || (secondNumber == "" || secondNumber == null) || (numberSumm === NaN)){
        alert("Вы ввели неправильное значение или нажали отмена");
        return;
    }else{
        alert(numberSumm);
        return;
    }
}

const greetUser = () => {
    let userName = prompt("Your name?");
    let userAge = Number(prompt("Your age?"));
    if(userAge >= 30){
        alert(`Здраствуйте, ${userName}`);
    }else{
        alert(`Привет, ${userName}`);
    }
}


const getPow = function(firstNumber, twoNumber = 2){
    let numberSumm = firstNumber ** twoNumber;
    alert(numberSumm);
}