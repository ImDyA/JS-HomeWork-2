const test = function(){
    let userName;
    let userSurname;
    let userPassword;
    // for(let i = 0; i == "";){
    //     i = prompt("Your name?");
    //     if(i == null){
    //         break;
    //     } else if(i != ""){
    //         // alert(`Your name is: ${userName}`)
    //         userName = i;
    //     }
    // }
    const userNameFunc = function(){
        test: for(let i = 0; i == "";){
            i = prompt("Your name?");
            if(i == null){
                break;
            } else if(i != ""){
                validUserName(i);
                userSurnameFunc();
            } else if(i == ""){
                for(i = 0; i == "";){
                    i = prompt("You entered incorrect name, please repeat!");
                    if(i == null){
                        break test;
                    } else if (i != ""){
                        validUserName(i);
                        userSurnameFunc();
                    }
                }
            }
        }
    }
    const userSurnameFunc = function(){
        test_2: for(let i = 0; i == "";){
            i = prompt("Your surname?");
            if(i == null){
                break;
            } else if(i != ""){
                validUserSurname(i);
                userPasswordFunc();
            } else if(i == ""){
                for(i = 0; i == "";){
                    i = prompt("You entered incorrect surname, please repeat!");
                    if(i == null){
                        break test_2;
                    } else if(i != ""){
                        validUserSurname(i);
                        userPasswordFunc();
                    }
                }
            }
        }
    }
    const userPasswordFunc = function(){
        test_3: for(let i = 0; i == "";){
            i = prompt("Your password");
            if(i == null){
                break;
            } else if(i.length > 6){
                userPassword = i;
                alert(`Hello ${userName} ${userSurname}`);
            } else if(i == "" || i.length < 6){
                for(i = 0; i == "" || i.length < 6;){
                    i = prompt("You entered incorrect password, please repeat!");
                    if(i == null){
                        break test_3;
                    } else if(i != "" && i.length > 6){
                        userPassword = i;
                        alert(`Hello ${userName} ${userSurname}`);
                    }
                }
            }
        }
    }
    const validUserName = function(unk){
        let validName;
        for(let a = 0; a <= unk.length; a++){
            if(a == 0){
                validName = unk.charAt(a).toUpperCase();
            }else{
                validName += unk.charAt(a).toLowerCase();
            }
        }
        userName = validName;
    }
    const validUserSurname = function(unk){
        let validName;
        for(let a = 0; a <= unk.length; a++){
            if(a == 0){
                validName = unk.charAt(a).toUpperCase();
            }else{
                validName += unk.charAt(a).toLowerCase();
            }
        }
        userSurname = validName;
    }
    userNameFunc();
}

const randomNumber = function(){
    let numberOne = Number(prompt("Get number one"));
    let numberTwo = Number(prompt("Get number two"));
    let numberRandom = Math.floor(Math.random() * numberTwo);
    for(;;){
        if(numberTwo < numberOne){
            alert("incorect number");
            break;
        }else if(numberRandom < numberOne){
            numberRandom = Math.floor(Math.random() * numberTwo);
            continue;
        }else{
            alert(numberRandom);
            break;
        }
    }
}