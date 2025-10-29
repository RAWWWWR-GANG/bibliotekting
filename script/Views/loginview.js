    let tempUserName = "";
    let tempPassWord = "";
function updateLoginView(){

    document.getElementById('app').innerHTML = /*HTML*/ `
    Username
    <input onchange="tempUserName =(this.value)">
    Password
    <input onchange="tempPassWord =(this.value)">
    <button onclick="goToPage('home')">Cancel</button>
    <button onclick="loggIn()">Logg in</button>
    <button onclick="registerUser()">Register bruker</button>
    `
}

function loggIn(){
    const adminUserName = model.data.admin.username;
    const adminPassWord = model.data.admin.password;
    const users = model.data.users;

    // find returnere første brukeren som matcher passord og brukernavn
    const foundUser = users.find(
        user => user.username === tempUserName && user.password === tempPassWord
    );
    if(tempUserName === adminUserName && tempPassWord == adminPassWord){
        model.app.adminIsLoggedIn = true
        alert("Velkommen admin")
        goToPage('home')
    }else if(foundUser){
        model.app.isLoggedIn = true
        goToPage('home')
        alert("Velkommen bruker")

        // gir feilmelding hvis felt er tomme
    }else if(!tempUserName || !tempPassWord){
        alert("Skriv")
    }else{
        alert("Feil passord")
    }
    console.log(tempUserName,tempPassWord,model.app.isLoggedIn,foundUser);
}

function registerUser(){
    // gir feilmelding hvis felt er tomme
    if(!tempUserName || !tempPassWord){
        alert("Skriv")
    }else{

    //gir ny bruker en id basert på hvor mange brukere ekisterer
    for(i = 0; i < model.data.users.length; i++){
    console.log(i)}
    let userId= "user"+i

    //adder ny bruker til model
    model.data.users.push({id: userId,username: tempUserName,password: tempPassWord})
    alert("bruker lagd")
    updateLoginView()
    console.log(model.data.users)}
}