function goToPage(pageName) {
  model.app.currentPage = pageName;
  updateView();
}

function startEditBook(id) {
  model.viewState.overview.editBook = true;
  updateView();
}

function cancelEdit() {
  model.viewState.overview.editBook = false;
  updateView();
}

function saveEditedBook(id) {
  // Finn riktig bok i data
  const updatedBook = model.viewState.overview;
  const bookIndex = model.data.books.findIndex(b => b.id === id);

  if (bookIndex !== -1) {
    model.data.books[bookIndex] = { ...model.data.books[bookIndex], ...updatedBook };
  }

  model.viewState.overview.editBook = false;
  updateView();
}

function deleteBook(id) {
  model.data.books = model.data.books.filter(book => book.id !== id);
  goToPage("home");
}