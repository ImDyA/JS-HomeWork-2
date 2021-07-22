// const userTimeTask = {};


// const userQuestion = (key) => {
//     let userTime;
//     let userTask;
//     alert("Введите ваше расписание(расписание должно быть в формате: 1 значение время только цифрами иначе оно не запишется; 2 значение можно любыми символами)")
//     // for(;;){
//     //     userTime = Number(prompt("Your time?"));
//     //     userTask = prompt("Your task?");
//     //     console.log(userTime);
//     //     if(userTime == null || userTask == null){
//     //         break;
//     //     } else if(userTime == "" || userTask == ""){
//     //         alert("Вы ввели неправильные данные");
//     //         continue;
//     //     } else {
//     //         key[userTime] = userTask;
//     //         continue;
//     //     }
//     // }
//     do{
//         userTime = Number(prompt("Your time?"));
//         userTask = prompt("Your task?");
//         if(userTime == null || userTask == null){
//             break;
//         } else if (userTime == "" || userTask == ""){
//             alert("Вы ввели неправильные данные");
//         } else {
//             key[userTime] = userTask;
//         }
//     }while(userTime !== null || userTask !== null);
//     delete key.NaN;
// }
// const userInformation = (user) => {
//     for(let key in user){
//         console.log(`${key}: ${user[key]}`)
//     }
// }
// userQuestion(userTimeTask);
// userInformation(userTimeTask);



// const salaryAll = {
//     ivan: "1234.56",
//     denis: "32167.54",
//     igor: "12473.06",
//     natasha: "83265.65",
// }

// const salarySum = (user) => {
//     let test = 0;
//     for(let key in user){
//         test += parseInt(user[key] * 100);
//         console.log(user[key]);
//     }
//     return test / 100;
// }

// let totalSalary = salarySum(salaryAll);
// console.log(totalSalary);




function getMaxSubSum(arr) {
    let oneNumber = 0;
    let twoNumber = 0;
    let maxSum = 0;
    let partialSumOne = 0;
    let partialSumTwo = 0;
    let oneNumberIndex = 0;

    for (let index in arr){
        partialSumOne = arr[index];
        oneNumber = Math.max(oneNumber, partialSumOne);
        if(oneNumber == arr[index]){
            oneNumberIndex = index;
        }
    }
    for (let index in arr){
        partialSumTwo = arr[index];
        if(index == oneNumberIndex){
            continue
        }else{
            twoNumber = Math.max(twoNumber, partialSumTwo);
        }
    }
    // console.log(oneNumberIndex);
    return maxSum = oneNumber + twoNumber;
}

console.log(getMaxSubSum([-1, 2, 7, 3, -9, 3, 6]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-1, -2, -3, -4, -5, 1]));


const asd = (arr) => {
    const res = {
        min: arr[0],
        max: arr[0],
    }

    for (let number of arr) {
        if (number < res.min){
            res.min = number;
        }
        if (number > res.max){
            res.max = number;
        }
    }
    return res;
}

console.log(asd([-1, -2, -3, -4, -5, -6]));