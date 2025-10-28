    let tempUserName = "";
    let tempPassWord = "";
function updateLoginView(){

    document.getElementById('app').innerHTML = /*HTML*/ `
    Username
    <input onchange="tempUserName =(this.value)";>
    Password
    <input onchange="tempPassWord =(this.value)";>
    <button onclick="goToPage('home')">Cancel</button>
    <button onclick="loggIn()">Logg in</button>
    <button onclick="registerUser()">Register bruker</button>
    `
}

function loggIn(){
    let userName = model.data.admin.username
    let passWord = model.data.admin.password

    if(tempUserName === userName && tempPassWord == passWord){
        model.app.isLoggedIn = true
    }else if(!tempUserName || !tempPassWord){
        alert("Skriv")
    }else{
        alert("Feil passord")
    }
    console.log(tempUserName,tempPassWord,model.app.isLoggedIn);
}

function registerUser(){
    let userName = model.data.users.username
    let password = model.data.users.password
}