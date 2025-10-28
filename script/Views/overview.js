
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

        <label>Forlag</label>
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

        <label>Rating</label>
        <div>
            ${getStars(model.viewState.overView.rating)}
        </div>

        <label>Detaljer</label>
        <textarea oninput="model.viewState.overView.details = this.value">${model.viewState.overView.details}</textarea>

        <div class="buttons">
            <button onclick="saveEditedBook(model.viewState.overView.currentBookIDX)">Lagre</button>
            <button onclick="cancelEdit()">Avbryt</button>
        </div>
        `;
    } else {
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

        return /*html*/ `
        <div class="book-card" style="margin:auto;">
            <img src="${book.img}" alt="${book.title}">
            <div class="book-card-title">${book.title}</div>
            ${getStars(book.rating)}

            <p><strong>Forlag:</strong> ${book.publisher}</p>
            <p><strong>Språk:</strong> ${book.language}</p>
            <p><strong>Sider:</strong> ${book.pages}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Utgivelsesår:</strong> ${book.publisherYear}</p>
            <p><strong>Beskrivelse:</strong> ${book.details}</p>
        </div>

        <div class="buttons">
            <button onclick="model.viewState.overView.editBook = true; updateOverView(${model.viewState.overView.currentBookIDX})">Rediger</button>
            <button onclick="goToPage('home')">Tilbake</button>
        </div>
        `;
    }
}
