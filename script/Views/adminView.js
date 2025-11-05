function updateAdminView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="users">
    ${userGenerator()}
    </div>
    <button onclick="goToPage('home')">Tilbake</button>
    <button onclick="logOut()">logg ut</button>
    `
}
//^^^^ trenger å adde css^^^^^^

//lager alle brukerne i admin panel
function userGenerator(){
    const users = model.data.users;
    let html = "";
    for (i = 0; i < users.length; i++){
        const user = users[i];
        console.log(i)
        html += `
        <div> 
        Bruker: ${user.username}
        rolle: ${user.role} <button onclick="updateRole(${i},1)">Oppgrader</button>
        <button onclick="updateRole(${i},-1)">Nedgrader</button>

        
        </div>`
    }
    html += `</div>`;
    return html;
}

//updaterer rollene etter admin's ønsker
function updateRole(index,modifier){
    const user = model.data.users[index];
    // gjør om roller til tall
    const roles = ["gjest","venn","admin"];
    const currentIndex = roles.indexOf(user.role);
    // finner rollen til brukern ^^^^ nextindex går til neste rolle. (modifer er enten +1 eller -1)
    const nextIndex = (currentIndex + modifier + roles.length) % roles.length;
    user.role = roles[nextIndex];
    updateAdminView()
    console.log(`${user.username} er nå ${user.role}`, index, currentIndex);
}

function logOut(){
    model.app.adminIsLoggedIn = false
    model.app.isLoggedIn = false
    goToPage('home')
}

// oppskrift på rolle testing
/* function testRoles(){
    const currentUser = model.data.users.find(u => u.id == model.app.currentUserId);
    if(currentUser.role == "gjest"){
        alert('pogdog')
    }
} */