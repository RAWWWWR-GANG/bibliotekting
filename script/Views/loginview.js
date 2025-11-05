    let tempUserName = "";
    let tempPassWord = "";
function updateLoginView(){

    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div>
    Username :
    <input onchange="tempUserName =(this.value)">
    </div>
    Password  :
    <input onchange="tempPassWord =(this.value)">
    
    <div>
    <button onclick="goToPage('home')">Tilbake</button>
    <button onclick="loggIn()">Logg inn</button>
    <button onclick="registerUser()">Registrer bruker</button>
    </div>
    `
    
    tempUserName = "";
    tempPassWord = "";
}

function loggIn(){
    const users = model.data.users;

    // find returnere første brukeren som matcher passord og brukernavn
    const foundUser = users.find(
        user => user.username === tempUserName && user.password === tempPassWord
    );
    if(foundUser && foundUser.role === "admin"){
        model.app.adminIsLoggedIn = true
        model.app.currentUserId = foundUser.id
        alert("Velkommen admin")
        goToPage('home')
    }else if(foundUser && foundUser.role === "gjest"){
        model.app.isLoggedIn = true
        model.app.currentUserId = foundUser.id
        goToPage('home')
        alert("Velkommen bruker")

        // gir feilmelding hvis felt er tomme
    }else if(!tempUserName || !tempPassWord){
        alert("Skriv")
    }else{
        alert("Feil passord")
    }
    console.log(tempUserName,tempPassWord,model.app.isLoggedIn,foundUser.role);
}

function registerUser(){
    // sjekker om brukernavn allerede er i bruk
    const users = model.data.users;
    const existingUser = users.find(
        user => user.username === tempUserName
    );
    // gir feilmelding hvis felt er tomme
    if(!tempUserName || !tempPassWord){
        alert("Skriv")

    // hvis brukernavn er i bruk
    }else if(existingUser){
        alert("Bruker ekisterer allerede")
    }else{

    //gir ny bruker en id basert på hvor mange brukere ekisterer
    for(i = 0; i < model.data.users.length; i++){
    console.log(i)}
    let userId= "user"+i

    //adder ny bruker til model
    model.data.users.push({id: userId,username: tempUserName,password: tempPassWord, role: "gjest"})
    alert("bruker lagd")
    updateLoginView()
    console.log(model.data.users)}
}