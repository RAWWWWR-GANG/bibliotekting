function saveEditedBook(bookIDX) {
    const book = model.data.books[bookIDX]
    book.title = model.viewState.title
    book.publisher = model.publisher
    book.language = model.language
    book.pages = model.pages
    book.isbn = model.isbn
    book.publisherYear = model.publisherYear
    book.rating = model.rating
    book.img= model.img
    book.details = model.details

    model.viewState.overView.editBook = false
    updateOverView(bookIDX)
}

