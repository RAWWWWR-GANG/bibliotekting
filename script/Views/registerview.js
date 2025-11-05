function updateRegisterBook() {
  const book = model.viewState.registerBook;

  document.getElementById("app").innerHTML = `
    <h2>Registrer ny bok</h2>

    <label>Tittel</label>
    <input type="text" value="${book.title}" 
      oninput="model.viewState.registerBook.title = this.value;">

    <label>Forfatter</label>
    <input type="text" value="${book.publisher}" 
      oninput="model.viewState.registerBook.publisher = this.value;">

    <label>Språk</label>
    <input type="text" value="${book.language}" 
      oninput="model.viewState.registerBook.language = this.value;">

    <label>Antall sider</label>
    <input type="number" value="${book.pages}" 
      oninput="model.viewState.registerBook.pages = this.value;">

    <label>ISBN</label>
    <input type="text" value="${book.isbn}" 
      oninput="model.viewState.registerBook.isbn = this.value;">

    <label>Utgivelsesår</label>
    <input type="number" value="${book.publisherYear}" 
      oninput="model.viewState.registerBook.publisherYear = this.value;">

    <label>Beskrivelse</label>
    <textarea oninput="model.viewState.registerBook.details = this.value">${book.details}</textarea>

    <label>Bilde (URL)</label>
    <input type="text" value="${book.img}" placeholder="https://..."
      oninput="model.viewState.registerBook.img = this.value; updateView()">

    <div class="rating-section">
  <label>Rating</label>
  <div class="stars-container">
    ${getStars(book.rating)}
  </div>
</div>

<div class="status-section">
  <label>Lesestatus</label>
  <select onchange="model.viewState.registerBook.readingStatus = Number(this.value)">
    ${model.data.readingstatus.map(status => `
      <option value="${status.id}" ${status.id == model.viewState.registerBook.readingStatus ? "selected" : ""}>
        ${status.status}
      </option>`).join("")}
  </select>
</div>

    <button onclick="saveNewBook()">Lagre bok</button>
    <button onclick="goToPage('home')" class="secondary">Avbryt</button>

    <h3>Forhåndsvisning</h3>
    <div class="book-list">
      <div class="book-card">
        <img src="${book.img || 'pictures/placeholder.jpg'}" alt="Forhåndsvisning">
        <div class="book-card-title">${book.title || 'Uten tittel'}</div>
        ${getStars(book.rating)}
        <p><strong>Forfatter:</strong> ${book.publisher || '---'}</p>
        <p><strong>Språk:</strong> ${book.language || '---'}</p>
        <p><strong>Sider:</strong> ${book.pages || '---'}</p>
        <p><strong>Utgivelsesår:</strong> ${book.publisherYear || '---'}</p>
        <p><strong>Beskrivelse:</strong> ${book.details || 'Ingen beskrivelse'}</p>
      </div>
    </div>
  `;
}