let standartFunction = function(){
    let firstNumber = Number(prompt("First number?"));
    let twoNumber = Number(prompt("Two number?"));
    let numberSumm = firstNumber + twoNumber;
    // Почему NaN не работает???
    if((firstNumber == "" || firstNumber == null) || (twoNumber == "" || twoNumber == null) || (numberSumm === NaN)){
        alert("Вы ввели неправильное значение или нажали отмена");
        return;
    }else{
        alert(numberSumm);
        return;
    }
}
let arrowFunction = () => {
    let firstNumber = Number(prompt("First number?"));
    let twoNumber = Number(prompt("Two number?"));
    let numberSumm = firstNumber + twoNumber;
    if((firstNumber == "" || firstNumber == null) || (twoNumber == "" || twoNumber == null) || (numberSumm === NaN)){
        alert("Вы ввели неправильное значение или нажали отмена");
        return;
    }else{
        alert(numberSumm);
        return;
    }
}

let userFunction = () => {
    let nameUser = prompt("Your name?");
    let ageUser = Number(prompt("Your age?"));
    if(ageUser >= 30){
        alert(`Здраствуйте, ${nameUser}`);
    }else{
        alert(`Привет, ${nameUser}`);
    }
}


let testFunction = function(firstNumber, twoNumber = 2){
    let numberSumm = firstNumber ** twoNumber;
    alert(numberSumm);
}