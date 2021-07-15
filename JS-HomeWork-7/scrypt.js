const userTimeTask = {};


const userQuestion = (key) => {
    let userTime;
    let userTask;
    alert("Введите ваше расписание(расписание должно быть в формате: 1 значение время только цифрами иначе оно не запишется; 2 значение можно любыми символами)")
    // for(;;){
    //     userTime = Number(prompt("Your time?"));
    //     userTask = prompt("Your task?");
    //     console.log(userTime);
    //     if(userTime == null || userTask == null){
    //         break;
    //     } else if(userTime == "" || userTask == ""){
    //         alert("Вы ввели неправильные данные");
    //         continue;
    //     } else {
    //         key[userTime] = userTask;
    //         continue;
    //     }
    // }
    do{
        userTime = Number(prompt("Your time?"));
        userTask = prompt("Your task?");
        if(userTime == null || userTask == null){
            break;
        } else if (userTime == "" || userTask == ""){
            alert("Вы ввели неправильные данные");
        } else {
            key[userTime] = userTask;
        }
    }while(userTime !== null || userTask !== null);
    delete key.NaN;
}
const userInformation = (user) => {
    for(let key in user){
        console.log(`${key}: ${user[key]}`)
    }
}
userQuestion(userTimeTask);
userInformation(userTimeTask);



const salaryAll = {
    ivan: "1234.56",
    denis: "32167.54",
    igor: "12473.06",
    natasha: "83265.65",
}

const salarySum = (user) => {
    let test = 0;
    for(let key in user){
        test += parseInt(user[key] * 100);
        console.log(user[key]);
    }
    return test / 100;
}

let totalSalary = salarySum(salaryAll);
console.log(totalSalary);