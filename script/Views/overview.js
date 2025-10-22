
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
        oninput="${model.viewState.overView.title = this.value}">
        </div>
            
        <input type="text"
        value="${model.viewState.overView.publisher}" 
        oninput="${model.viewState.overView.publisher = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.language}" 
        oninput="${model.viewState.overView.language = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.pages}" 
        oninput="${model.viewState.overView.pages = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.isbn}" 
        oninput="${model.viewState.overView.isbn = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.publisherYear}" 
        oninput="${model.viewState.overView.publisherYear = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.rating}" 
        oninput="${model.viewState.overView.rating = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.readingStatus}" 
        oninput="${model.viewState.overView.readingStatus = this.value}">
        </div>

        <input type="text"
        value="${model.viewState.overView.details}" 
        oninput="${model.viewState.overView.details = this.value}">
        </div>

        <img 
        value="${model.viewState.overView.img}" 
        oninput="${model.viewState.overView.img = this.value}">
        </div>
            
            <button onclick="saveEditedBook(currentBookIDX)">Save</button>
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
    <div>
        <img src="${book.img}" alt="bildet">
        <div>Informasjon: ${book.details}</div>
    </div>
    `
    }
}