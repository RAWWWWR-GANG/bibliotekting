function goToPage(page) {
  model.app.currentPage = page;
  updateView();
}

function startEditBook() {
  model.viewState.overview.editBook = true;
  updateView();
}

function cancelEdit() {
  model.viewState.overview.editBook = false;
  updateView();
}

function saveEditedBook(id) {
  const b = model.viewState.overview;
  const index = model.data.books.findIndex(x => x.id === id);
  if (index !== -1) model.data.books[index] = { ...model.data.books[index], ...b };
  b.editBook = false;
  updateView();
}

function deleteBook(id) {
  if (confirm("Delete this book?")) {
    model.data.books = model.data.books.filter(b => b.id !== id);
    goToPage("home");
  }
}