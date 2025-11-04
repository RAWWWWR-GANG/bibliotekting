function updateAdminView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="users">
    ${userGenerator()}
    </div>
    <button onclick="goToPage('home')">Tilbake</button>
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
    const roles = ["gjest","venn","admin"];
    const currentIndex = roles.indexOf(user.role);
    const nextIndex = (currentIndex + modifier + roles.length) % roles.length;
    user.role = roles[nextIndex];
    updateAdminView()
    console.log(`${user.username} er nå ${user.role}`, index, currentIndex);
}