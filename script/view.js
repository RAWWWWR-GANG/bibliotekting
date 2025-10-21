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
  // dropdown for Nyest / Eldst
  const dates = model.viewState.home.filterByRelease
  const dateList = model.data.dateState;
  const dateFilter = `
    <select onchange="model.viewState.home.filterByRelease = Number(this.value); sortDates();">
      ${dateList.map(s => `
        <option value="${s.id}" ${s.id == dates ? 'selected' : ''}>
          ${s.state}
        </option>`).join('')}
    </select>
  `;


    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="toggleDarkMode()">
    ${model.app.darkMode ? "Lys modus" : "Mørk modus"}
    </button>
    <button onclick="goToPage('registerBook')">Legg til bok</button>
    ${dateFilter}
    <div id="Books">
    ${getBooks()}
    
    </div>
    `;
    sortDates();

}


//sortering for Nyest / eldst
function sortDates(){
  const dates = model.viewState.home.filterByRelease;
  const books = model.data.books;
  if (dates === 0){
    books.sort((a, b) => b.publisherYear - a.publisherYear);
 
  }else{
    books.sort((a, b) => a.publisherYear - b.publisherYear)
    ;}

  console.log(books, dates);
  document.getElementById('Books').innerHTML = getBooks(); 

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

