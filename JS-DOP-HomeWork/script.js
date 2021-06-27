let userName = "Admin";
let userPassword = "Im in charge";
let userLogin = prompt("Your login?", "Your login");
if(userLogin !== userName){
    alert("I do not know you");
}else if(userLogin == "" || userLogin == null){
    alert("Cansel");
}else if(userLogin == userName){
    alert("Login is true, enter password");
    userLogin = prompt("Your password?", "password");
    if(userLogin !== userPassword){
        alert("not true password");
    }else if(userLogin == "" || userLogin == null){
        alert("Cansel");
    }else if(userLogin == userPassword){
        alert("HELLO");
    }
}
// if(userLogin !== userPassword){
//     alert("not true password");
// }else if(userLogin == "" || userLogin == null){
//     alert("Cansel");
// }else if(userLogin == userPassword){
//     alert("HELLO");
// }
