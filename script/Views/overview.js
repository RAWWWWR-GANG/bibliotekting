
function updateOverView(bookIdx){
    if (bookIdx !== undefined) {
        model.viewState.overView.currentBookIDX = bookIdx;
    }
    
    const index = model.viewState.overView.currentBookIDX;
    const book = model.data.books[index];

    if (!book) {
        console.warn("Ingen bok funnet på index:", index);
        return;
    }

    document.getElementById('app').innerHTML = editField(book);
}



function editField(book) {
    if (model.viewState.overView.editBook) {
        // EDIT MODE

        const optionsHtml = (model.data.readingstatus ?? [])
        .map(s => `
            <option value="${s.id}" ${s.id === model.viewState.overView.readingStatus ? 'selected' : ''}>
                ${s.status}
            </option>
        `).join('');

        return /*html*/ `
        <h2>Rediger bok</h2>
        <div class="book-card" style="margin:auto;">
            <img src="${model.viewState.overView.img}" alt="${model.viewState.overView.title}">
            <input type="text" value="${model.viewState.overView.img}" 
                oninput="model.viewState.overView.img = this.value; updateOverView(model.viewState.overView.currentBookIDX)">
        </div>

        <label>Tittel</label>
        <input type="text" value="${model.viewState.overView.title}" 
            oninput="model.viewState.overView.title = this.value">

        <label>Forfatter</label>
        <input type="text" value="${model.viewState.overView.publisher}"
            oninput="model.viewState.overView.publisher = this.value">

        <label>Språk</label>
        <input type="text" value="${model.viewState.overView.language}"
            oninput="model.viewState.overView.language = this.value">

        <label>Antall sider</label>
        <input type="number" value="${model.viewState.overView.pages}"
            oninput="model.viewState.overView.pages = this.value">

        <label>ISBN</label>
        <input type="text" value="${model.viewState.overView.isbn}"
            oninput="model.viewState.overView.isbn = this.value">

        <label>Utgivelsesår</label>
        <input type="number" value="${model.viewState.overView.publisherYear}"
            oninput="model.viewState.overView.publisherYear = this.value">

        <div class="rating-section">
        <label>Rating</label>
        <div class="stars-container">
            ${getStars(model.viewState.overView.rating)}
  </div>
</div>

        <div class="status-section">
        <label>Lesestatus</label>
        <select onchange="model.viewState.overView.readingStatus = Number(this.value)">
          ${optionsHtml}
        </select>
      </div>


        <label>Detaljer</label>
        <textarea oninput="model.viewState.overView.details = this.value">${model.viewState.overView.details}</textarea>

        <div class="buttons">
            <button onclick="saveEditedBook(model.viewState.overView.currentBookIDX)">Lagre</button>
            <button onclick="cancelEdit()">Avbryt</button>
            <button onclick="deleteBook()">Fjern bok</button>
        </div>
        `;
    } else {
        const currentUser = model.data.users.find(u => u.id == model.app.currentUserId);

        // VIEW MODE
        const OW = model.viewState.overView;
        OW.title = book.title;
        OW.publisher = book.publisher;
        OW.language = book.language;
        OW.pages = book.pages;
        OW.isbn = book.isbn;
        OW.publisherYear = book.publisherYear;
        OW.rating = book.rating;
        OW.img = book.img;
        OW.details = book.details;
        OW.readingStatus = (model.data.readingstatus ?? [])
            .find(s => s.status.toLowerCase() === (book.readingStatus || '').toLowerCase())
            ?.id ?? 0;

        return /*html*/ `
        <div class="book-overview">
  <div class="book-overview-left">
    <img src="${book.img}" alt="${book.title}">
  </div>

  <div class="book-overview-right">
    <h2>${book.title}</h2>
    <p><strong>Forfatter:</strong> ${book.publisher}</p>
    <p><strong>Språk:</strong> ${book.language}</p>
    <p><strong>Sider:</strong> ${book.pages}</p>
    <p><strong>ISBN:</strong> ${book.isbn}</p>
    <p><strong>Utgivelsesår:</strong> ${book.publisherYear}</p>
    <p><strong>Lesestatus:</strong> ${book.readingStatus}</p>
    <p><strong>Vurdering:</strong> ${getStars(book.rating)}</p>
    <p><strong>Beskrivelse:</strong> ${book.details}</p>
    ${currentUser.role == "admin" || currentUser.role == "venn"
       ?`${book.contentType === 'pdf' && book.contentURL
         ? '<div><a class="read-link" href="' + book.contentURL + '" target="_blank" rel="noopener">Les boken (PDF)</a></div>'
         : ''
        }`
        : ""
    }

    <div class="buttons">
    ${currentUser.role == "admin"
      ?`<button onclick="model.viewState.overView.editBook = true; updateOverView(${model.viewState.overView.currentBookIDX})">Rediger</button>`
      : ""
      }
      <button onclick="goToPage('home')">Tilbake</button>
    </div>
  </div>
</div>
`;
    }
}

