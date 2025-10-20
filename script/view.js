function updateView(){
    const page = model.app.currentPage
    if (page === "home"){
        updateViewHome();
    }
    else if (page === "overView"){
        updateOverView();
    }
    else if (page === "registerBook"){
        updateRegisterBook();
        }
}


function updateViewHome(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="goToPage('registerBook')">Legg til bok</button>
    <input>
    <div id="dateSort">Nyest</div>
    <div>Sortering</div>
    <div id="Books">
    ${getBooks()}
    </div>
    `;
    document.getElementById('dateSort').addEventListener('click', handleDateSort);
}

function updateOverView(){

}
function updateRegisterBook(){
    const book = model.viewState.registerBook;
    const statusList = model.data.readingstatus;

    let content = "";
    for (let key in book) {
        if (key === "readingStatus") continue;
        content += `
        <label>${key}</label> 
        <input type="text" value="${book[key] }   
    `;
    
}

document.getElementById('app').innerHTML = /*HTML*/ `
    <div>hei</div>

`
}
function handleDateSort(){
    console.log("yo");
    
}