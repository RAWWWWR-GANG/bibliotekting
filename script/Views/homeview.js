function getBooks() {
  const books = model.data.books;
  const currentUser = model.data.users.find(u => u.id == model.app.currentUserId);
  let html = `<div class="book-list">`;
  // Legg til bok funksjon, kan bare se som admin
  html +=`
  ${currentUser.role == "admin"
   ? 
      `<div class="book-card add-card" onclick="goToPage('registerBook')">
          <div class="plus-icon">&#43;</div>
          <div class="book-card-title">Legg til bok</div>
      </div>`
   : ""
  }`

  // Deretter eksisterende bøker
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    

    html += `
      <div class="book-card" data-status="${book.readingStatus}" onclick="updateOverView(${i})">
      
        <div class="status-badge ${book.readingStatus}">${book.readingStatus}</div>
        <img src="${book.img}" alt="${book.title}">
        <div class="book-card-title">${book.title}</div>
        <div class="book-card-title">${book.publisher}</div>
        ${getStars(book.rating)}
      </div>
    `;
  }

  html += `</div>`;
  return html;
}





function updateViewHome() {
  const dates = model.viewState.home.filterByRelease;
  const dateList = model.data.dateState;
  const rStatus = model.viewState.home.filterReadingStatus;
  const rStatusL = model.data.readingstatus;
  const loggedInUser = model.data.users.find(u => u.id == model.app.currentUserId)
  console.log(loggedInUser)

  /* Header */
  /* Fjern gammel header før ny legges til */
const existingHeader = document.querySelector(".header-bar");
if (existingHeader) existingHeader.remove();

/* Header */
document.body.insertAdjacentHTML("afterbegin", `
  <div class="header-bar">
    <button onclick="toggleDarkMode()" class="mode-toggle">
      ${model.app.darkMode ? "Library Mode" : "Book Mode"}
    </button>

    <div class="welcome-text">
      ${
        model.app.adminIsLoggedIn
          ? "Velkommen, <strong>Admin</strong>"
          : model.app.currentUserId
            ? `Velkommen, <strong>${loggedInUser.username}</strong>`
            : "Velkommen til biblioteket!"
      }
    </div>

    ${model.app.adminIsLoggedIn
      ? `<button onclick="goToPage('admin')" class="login-btn">Admin panel</button>`
      : `<button onclick="logOut()" class="login-btn">Logg ut</button>`}
        
        
    
      
    
  </div>
`);

  /* TOP-BAR MED FILTRE, SØK OG SORTERING */
  const dateFilter = `
    <select onchange="model.viewState.home.filterByRelease = Number(this.value); sortDates();">
      ${model.data.dateState.map(s => `
        <option value="${s.id}" ${s.id == dates ? "selected" : ""}>
          ${s.state}
        </option>`).join("")}
    </select>
  `;

  const readingFilter = `
    <select onchange="model.viewState.home.filterReadingStatus = Number(this.value); filterByReadingStatus();">
      ${model.data.readingstatus.map(s => `
        <option value="${s.id}" ${s.id == rStatus ? "selected" : ""}>
          ${s.status}
        </option>`).join("")}
    </select>
  `;

  const searchBar = `
    <input type="text" id="searchBar" placeholder="Søk etter bok..." 
      oninput="model.viewState.home.searchbar = this.value; filterBySearchbar()">
  `;

  // === SELVE INNHOLDET I APP ===
  document.getElementById("app").innerHTML = `
    <div class="top-bar">
      ${dateFilter}
      ${readingFilter}
      ${searchBar}
    </div>

    <div id="Books">${getBooks()}</div>
  `;

  sortDates();
}



function filterBySearchbar() {
  const searchValue = (model.viewState.home.searchbar || "").toLowerCase().trim();
  const statusId = model.viewState.home.filterReadingStatus;

  const statusNameMap = {
    0: "unread",
    1: "read",
    2: "reading",
    3: "all"
  };

  const wanted = statusNameMap[statusId];

  const bookdivs = document.querySelectorAll("#Books .book-card");

  bookdivs.forEach(div => {
    if (div.classList.contains("add-card")) {
      div.classList.remove("hidden");
      return;
    }

    const bookStatus = div.dataset.status;
    const textMatch = div.textContent.toLowerCase().includes(searchValue);


    const statusMatch = (wanted === "all") || (bookStatus === wanted);

    let shouldShow;
    if (searchValue === "") {
      shouldShow = statusMatch;
    } else {
      shouldShow = statusMatch && textMatch;
    }

    div.classList.toggle("hidden", !shouldShow);
  });
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
  filterByReadingStatus();
  filterBySearchbar()
}
// gjør om nummer verdier til states
const readingStatusMap = {unread: 0, read: 1, reading: 2, all: 3};
model.data.books.forEach(book => {
  book.readingStatusId = readingStatusMap[book.readingStatus];
});

//filter for å gjemme bøker basert på lese status
function filterByReadingStatus(){
  const statusId = model.viewState.home.filterReadingStatus; 

  const statusNameMap = {
    0: "unread",
    1: "read",
    2: "reading",
    3: "all"
  };

  const wanted = statusNameMap[statusId];

  console.log("statusId =", statusId, "wanted =", wanted);

  const bookDivs = document.querySelectorAll('#Books .book-card');

  if (wanted === "all") {
    bookDivs.forEach(div => {
      div.classList.remove('hidden');
    });
    filterBySearchbar();
    return;
  }

  bookDivs.forEach(div => {
    if (div.classList.contains("add-card")) {
      div.classList.remove('hidden');
      return;
    }
    

    const bookStatus = div.dataset.status;
    const shouldHide = bookStatus !== wanted;

    div.classList.toggle('hidden', shouldHide,);
  });
  filterBySearchbar();
}



