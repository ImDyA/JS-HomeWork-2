

// Задание 1 начало
const arrTrueNumber = (arr) => {
    let x = 0
    for(let i of arr){
        // if(i == true){
        //     x++;
        // }else {
        //     continue;
        // }
        if(i){
            x++;
        }else {
            continue;
        }
    }
    return x;
}

const arrTrueNumber2 = (arr) => {
    let a = arr.filter((a) => a == true);
    return a.length;
}

// console.log(arrTrueNumber2([true, false, false, true, false]));
// console.log(arrTrueNumber2([true, false, false, true, false, true, false, true]));
// console.log(arrTrueNumber2([false, false, false, false]));
// console.log(arrTrueNumber2([]));
//Задание 1 конец (3 разных варианта, не знаю какой лучше)



// Задание 2 начало
const sortObj = {
    a: 0,
    b: 0,
    v: 0,
}
const sortObj2 = {
    apples: 0,
    oranges: 0,
    pears: 0,
}
const arr1 = ["a", "v", "a", "b", "b"];
const arr2 = [
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
];

sortObj.a = arr1.filter((a) => a == "a").length;
sortObj.b = arr1.filter((a) => a == "b").length;
sortObj.v = arr1.filter((a) => a == "v").length;
console.log(sortObj);

sortObj2.apples = arr2.filter((a) => a == "apples").length;
sortObj2.oranges = arr2.filter((a) => a == "oranges").length;
sortObj2.pears = arr2.filter((a) => a == "pears").length;
console.log(sortObj2)

// Задание 2 конец



//Задание 3 начало



//Задание 3 конец





let p = 9;
let l = 8;
let m = 6;

const pol = [2, 6, 8, 10, 3];

const tets = (num) => {
    for(let i in num){
        // if(num[i] % 2 != 0){
        //     console.log('number: ', num[i])
        // } else {
        //     continue;
        // }
    }
}
tets(pol);