function updateView(){
    applyTheme();
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
    <button onclick="toggleDarkMode()">
    ${model.app.darkMode ? "Lys modus" : "Mørk modus"}
    </button>
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

function updateOverView(bookIdx){
    const book = model.data.books[bookIdx]
    document.getElementById("app").innerHTML = /*html*/`
    <h1>${book.title}</h1>
    <div>
        <div>Forlag: ${book.publisher}</div>
        <div>Språk: ${book.language}</div>
        <div>Sider: ${book.pages}</div>
        <div>ISBN: ${book.isbn}</div>
        <div>Utgivelsesår: ${book.publisherYear}</div>
        <div>rating: ${book.rating} av 5</div>
    </div>
    <div>
        <img src="${book.img}" alt="bildet">
        <div>Informasjon: ${book.details}</div>
    </div>
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
    <button onclick="cancelRegisterBook()">Cancel</button>
  `;
}

function handleDateSort(){
    console.log("yo");
    
}