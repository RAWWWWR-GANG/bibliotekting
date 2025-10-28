
function updateOverView(bookIdx){
    const book = model.data.books[bookIdx]
    model.viewState.overView.currentBookIDX = bookIdx
 
        
        document.getElementById('app').innerHTML = `
            ${editField(book)}
        `;
 }



function editField(book){
    if (model.viewState.overView.editBook){
        return /*html*/ `
    
        <h2>Edit Book</h2>
        <div> Tittel:
        <input type="text"
        value="${model.viewState.overView.title}" 
        oninput="model.viewState.overView.title = this.value">
        </div>
            
        <div>publisher:
        <input type="text"
        value="${model.viewState.overView.publisher}" 
        oninput="model.viewState.overView.publisher = this.value">
        </div>

        <div>Språk:
        <input type="text"
        value="${model.viewState.overView.language}" 
        oninput="model.viewState.overView.language = this.value">
        </div>

        <div>Sider:
        <input type="text"
        value="${model.viewState.overView.pages}" 
        oninput="model.viewState.overView.pages = this.value">
        </div>

        <div>ISBN:
        <input type="text"
        value="${model.viewState.overView.isbn}" 
        oninput="model.viewState.overView.isbn = this.value">
        </div>

        <div>Publbiseringsdato:
        <input type="text"
        value="${model.viewState.overView.publisherYear}" 
        oninput="model.viewState.overView.publisherYear = this.value">
        </div>

        <div>Rating:
        <input type="text"
        value="${model.viewState.overView.rating}" 
        oninput="model.viewState.overView.rating = this.value">
        </div>

        <div>Lese status:
        <input type="text"
        value="${model.viewState.overView.readingStatus}" 
        oninput="model.viewState.overView.readingStatus = this.value">
        </div>

        <div>Overskrift:
        <input type="text"
        value="${model.viewState.overView.details}" 
        oninput="model.viewState.overView.details = this.value">
        </div>

        <div>Bildet:
        <img 
        value="${model.viewState.overView.img}" 
        oninput="model.viewState.overView.img = this.value">
        </div>
            
            <button onclick="saveEditedBook(model.viewState.overView.currentBookIDX)">Save</button>
            <button onclick="cancelEdit()">Cancel</button>`
    } 
    
    else {
        const OW = model.viewState.overView

        OW.title = book.title
        OW.publisher = book.publisher
        OW.language = book.language
        OW.pages = book.pages
        OW.isbn = book.isbn
        OW.publisherYear = book.publisherYear
        OW.rating = book.rating
        OW.img = book.img
        OW.details = book.details
        return /*html*/ `
        <h1>${book.title}</h1>
    <div>
        <button id="editbtn" onclick="model.viewState.overView.editBook = true; updateOverView(${model.viewState.overView.currentBookIDX})">Edit</button>
        <div>Forlag: ${book.publisher}</div>
        <div>Språk: ${book.language}</div>
        <div>Sider: ${book.pages}</div>
        <div>ISBN: ${book.isbn}</div>
        <div>Utgivelsesår: ${book.publisherYear}</div>
        <div>rating: ${book.rating} av 5</div>
    </div>
    <div class="book">
        <img src="${book.img}" alt="bildet" class="book-img">
        <div class="book-details">Informasjon: ${book.details}</div>
    </div>
    `
    }
}