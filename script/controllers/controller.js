function goToPage(page) {
  model.app.currentPage = page;
  updateView();
}

function saveNewBook(){

    
    const newBook = { ...model.viewState.registerBook };
    model.data.readingstatus.forEach(s => {
        if(s.id === newBook.readingStatus){
            newBook.readingStatus = s.status.toLowerCase()
        }
    });

    //Lager bok ID 
    newBook.id = model.data.books.length > 0
    ? model.data.books[model.data.books.length - 1].id + 1
    : 1;
    console.log(newBook)
    model.data.books.push(newBook);

    //Nullstiller  viewState.registerBook etter det er lagra
    model.viewState.registerBook = {
        title: "",
        publisher: "",
        language: "",
        pages: "",
        isbn: "",
        publisherYear:"",
        img: "",
        rating: "",
        details: "",
        readingStatus: 0

    };

    goToPage("home");
}

function cancelRegisterBook(){
    model.viewState.registerBook = {
        title: "",
        publisher: "",
        language: "",
        pages: "",
        isbn: "",
        publisherYear: "",
        img: "",
        rating: "",
        details: "",
        readingStatus: 0
    };
    
    goToPage("home");
}

function toggleDarkMode() {
  model.app.darkMode = !model.app.darkMode;
  applyTheme();
  updateViewHome();
}

function applyTheme() {
    if (model.app.darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}


