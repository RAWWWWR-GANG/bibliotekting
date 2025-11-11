function updateAdminView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="admin-panel">
        <h2>Adminpanel</h2>
        <div class="user-list">
            ${userGenerator()}
        </div>
        <div class="admin-buttons">
            <button onclick="goToPage('home')">Tilbake</button>
            <button onclick="logOut()">Logg ut</button>
        </div>
    </div>
    `
}
//^^^^ trenger å adde css^^^^^^

//lager alle brukerne i admin panel
function userGenerator(){
    const users = model.data.users;
    let html = "";
    for (i = 0; i < users.length; i++){
        const user = users[i];
        html += `
        <div class="user-card"> 
            <div><strong>Bruker:</strong> ${user.username}</div>
            <div><strong>Rolle:</strong> ${user.role}</div>
            <div class="user-actions">
                <button onclick="updateRole(${i},1)">Oppgrader</button> 
                <button onclick="updateRole(${i},-1)">Nedgrader</button>
            </div>
        </div>`;
    }
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

function logOut() {
if (model.app.currentUserId){
  model.app.adminIsLoggedIn = false;
  model.app.isLoggedIn = false;
  model.app.currentUser = null;
  goToPage('login');
}
}



// oppskrift på rolle testing
/* function testRoles(){
    const currentUser = model.data.users.find(u => u.id == model.app.currentUserId);
    if(currentUser.role == "gjest"){
        alert('pogdog')
    }
} */