const userTimeTask = {};


const userQuestion = (key) => {
    let userTime;
    let userTask;
    alert("Введите ваше расписание(расписание должно быть в формате: 1 значение время только цифрами иначе оно не запишется; 2 значение можно любыми символами)")
    for(;;){
        userTime = Number(prompt("Your time?"));
        userTask = prompt("Your task?");
        console.log(userTime);
        if(userTime == null || userTask == null){
            break;
        } else if(userTime == "" || userTask == ""){
            alert("Вы ввели неправильные данные");
            continue;
        } else {
            key[userTime] = userTask;
            continue;
        }
    }
    delete key.NaN;
}
userQuestion(userTimeTask);
console.log(userTimeTask);



const salaryAll = {
    ivan: "1234.56",
    denis: "32167.54",
    igor: "12473.06",
    natasha: "83265.65",
}

const salarySum = (user) => {
    let test;
    for(let key in user){
        console.log(user[key]);
        test += parseInt(user[key]);
        console.log(test);
    }
    return test;
}

let totalSalary = salarySum(salaryAll);
console.log(totalSalary);