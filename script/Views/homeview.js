function getBooks() {
  let books = model.data.books;
  let html = `<div class="book-list">`;

  // Legg til bok boks først
  html += `
      <div class="book-card add-card" onclick="goToPage('registerBook')">
          <div class="plus-icon">&#43;</div>
          <div class="book-card-title">Legg til bok</div>
      </div>
  `;

  // Deretter eksisterende bøker
  for (let i = 0; i < books.length; i++) {
      const book = books[i];
      html += `
          <div class="book-card ${book.title} ${book.publisher}"
          data-status="${book.readingStatus}"
          onclick="updateOverView(${i})">
              <img src="${book.img}" alt="${book.title}">
              <div class="book-card-title">${book.title}</div>
              <div class="book-card-auther">${book.publisher}</div>
              ${getStars(book.rating)}
          </div>
      `;
  }

  html += `</div>`;
  return html;
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
  // dropdown for lesestatus filter
  const rStatus = model.viewState.home.filterReadingStatus
  const rStatusL = model.data.readingstatus
  const readingFilter = `
    <select onchange="model.viewState.home.filterReadingStatus = Number(this.value); 
    filterByReadingStatus();
    filterBySearchbar()">
      ${rStatusL.map(s => `
        <option value="${s.id}" ${s.id == rStatus ? 'selected' : ''}>
          ${s.status}
        </option>`).join('')}
    </select>
  `;


    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="toggleDarkMode()">
    ${model.app.darkMode ? "Lys modus" : "Lese modus"}
    </button>
    <button onclick="goToPage('login')"> Logg in </button>
    ${dateFilter}
    ${readingFilter}
    ${createSearchbar()}
    <div id="Books">
    ${getBooks()}
    
    </div>
    `;
    sortDates();
    

}

function createSearchbar(){
  let html = /*HTML*/`
  <div> 
  <input type = "text" value ="${model.viewState.home.searchbar}"
  oninput="model.viewState.home.searchbar = this.value ;filterBySearchbar()">
  </div>`
  return html;
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
    return;
  }

  bookDivs.forEach(div => {
    if (div.classList.contains("add-card")) {
      div.classList.remove('hidden');
      return;
    }

    const bookStatus = div.dataset.status; 
    const shouldHide = bookStatus !== wanted;

    div.classList.toggle('hidden', shouldHide);
  });
}



