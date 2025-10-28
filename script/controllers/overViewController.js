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

    emptyOverView()
    updateOverView(model.viewState.overView.currentBookIDX)
}

function cancelEdit(){
    emptyOverView()
    updateOverView(model.viewState.overView.currentBookIDX)
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


function getStars(currentRating){
    let html = ""
    for (let i = 1; i <=5; i++){
        
        let color;

        if (i <= currentRating){
            color = "yellow"
        } else{
            color = "gray"
        }

        html += /*html*/`
        <div style="font-size: var; cursor: pointer; color:${color};"
        onclick="model.viewState.overView.rating = ${i};
         updateOverView(model.viewState.overView.currentBookIDX)">☆</div>
        `

    }
    return html;
}