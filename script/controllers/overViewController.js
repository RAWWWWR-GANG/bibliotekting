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

    model.viewState.overView.editBook = false
    updateOverView(model.viewState.overView.currentBookIDX)
}

