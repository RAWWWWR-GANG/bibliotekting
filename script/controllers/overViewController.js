function saveEditedBook(bookIDX) {
    const book = model.data.books[bookIDX]
    book.title = model.viewState.overView.title
    book.publisher = model.viewState.overView.publisher
    book.language = model.viewState.overView.language
    book.pages = model.viewState.overView.pages
    book.isbn = model.viewState.overView.isbn
    book.publisherYear = model.viewState.overView.publisherYear
    book.rating = model.viewState.overView.rating
    book.img= model.viewState.overView.img
    book.details = model.viewState.overView.details
    model.data.readingstatus.forEach(s => {
        if (s.id === model.viewState.overView.readingStatus){
            book.readingStatus = s.status.toLowerCase();
        }
    });
    

    model.viewState.overView.editBook = false;
    emptyOverView();
    updateOverView(bookIDX);
    
}

function cancelEdit(){
    model.viewState.overView.editBook = false;
    updateOverView(model.viewState.overView.currentBookIDX);
    emptyOverView();
}

function emptyOverView(){
   const overView = model.viewState.overView
   overView.title = ""
   overView.publisher = ""
   overView.language = ""
   overView.pages = ""
   overView.isbn = ""
   overView.publisherYear = ""
   overView.rating = ""
   overView.img = ""
   overView.details = ""
   overView.editBook = false
}


function getStars(currentRating) {
    let html = "";
    const isRegisterMode = model.app.currentPage === "registerBook";
    const isEditMode = model.viewState.overView.editBook === true;

    for (let i = 1; i <= 5; i++) {
        const starClass = i <= currentRating ? "star-filled" : "star-empty";

        // Interaktiv modus for registrering
        if (isRegisterMode) {
            html += `
                <span class="star ${starClass}" 
                      onclick="model.viewState.registerBook.rating = ${i}; updateView()">
                    ★
                </span>`;
        }
        // Interaktiv modus for redigering
        else if (isEditMode) {
            html += `
                <span class="star ${starClass}" 
                      onclick="model.viewState.overView.rating = ${i}; updateOverView(model.viewState.overView.currentBookIDX)">

                    ★
                </span>`;
        }
        // Visningsmodus (kun vise stjerner)
        else {
            html += `<span class="star ${starClass}">★</span>`;
        }
    }
    return html;
}

function getRating(currentRating){
    let html = ""
    for (let i = 1; i <=5; i++){
        let starClass = "";
        if (i <= currentRating) {
            starClass = "star-filled"; // gul
        } else {
            starClass = "star-empty"; // grå
        }
        html += /*html*/ `
        <span class="star ${starClass}">
            ★
        </span>
    `
    }
    return html
}