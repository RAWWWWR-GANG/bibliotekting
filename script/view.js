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
    document.getElementById("app").innerHTML = /*html*/`
    <h1>${model.data.}</h1>
    `
}
function updateRegisterBook(){
    const book = model.viewState.registerBook;
    const statusList = model.data.readingstatus;

    let content = "";
    for (let key in book) {
        if (key === "readingStatus") continue;
        content += `
        <label>${key}</label>
      <input type="text" value="${book[key] || ''}"
             oninput="model.viewState.registerBook.${key} = this.value">
    `;
  }

  // Lag dropdown for readingStatus
  const statusField = `
    <label>Reading Status</label>
    <select onchange="model.viewState.registerBook.readingStatus = this.value">
      ${statusList.map(s => `
        <option value="${s.id}" ${s.id == book.readingStatus ? 'selected' : ''}>
          ${s.status}
        </option>`).join('')}
    </select>
  `;

  // Samle alt og vis
  document.getElementById('app').innerHTML = `
    <h2>Register New Book</h2>
    ${content}
    ${statusField}
    <button onclick="saveNewBook()">Save</button>
    <button onclick="gotoPage('home')">Cancel</button>
  `;
}

function handleDateSort(){
    console.log("yo");
    
}