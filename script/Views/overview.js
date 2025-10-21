/* function updateOverView(bookIdx){
    const book = model.data.books[bookIdx]
    if (!model.viewState.overView.editBook){
    document.getElementById("app").innerHTML = `
    <h1>${book.title}</h1>
    <div>
        <button onclick="${editBook = True}">Edit</button>
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
    storeViewstate()    
} 
    
    else{
        document.getElementById("app").innerHTML = `
    <h1>${book.title}</h1>
    <div>
        <button onclick="${editBook = True}">Edit</button>
        <div>Forlag: ${book.publisher}</div>
        <div>Språk: ${book.language}</div>
        <div>Sider: ${book.pages}</div>
        <div>ISBN: ${book.isbn}</div>
        <div>Utgivelsesår: ${book.publisherYear}</div>
        <div>rating: ${book.rating} av 5</div>
    </div>
    <div>
        <img src="${book.img}" alt="legg til bildet">
        <div>Informasjon: ${book.details}</div>
    </div>
    `
    }
}
*/

function storeViewstate(){

}

function updateOverView(bookIdx){
    const book = model.data.books[bookIdx]
 
        // EDIT MODE
        document.getElementById('app').innerHTML = `
            ${editField}
        `;
 }



function editField(book){`
<h2>Edit Book</h2>
            ${editField("Title", "title", book.title)}
            ${editField("Publisher", "publisher", book.publisher)}
            ${editField("Language", "language", book.language)}
            ${editField("Pages", "pages", book.pages)}
            ${editField("ISBN", "isbn", book.isbn)}
            ${editField("Year", "publisherYear", book.publisherYear)}
            ${editField("Rating", "rating", book.rating)}
            ${statusDropdown(statusList, book.readingStatus)}
            <label>Details</label>
            <textarea oninput="model.viewState.overView.details = this.value">${book.details}</textarea>
            <button onclick="saveEditedBook()">Save</button>
            <button onclick="cancelEdit()">Cancel</button>`
}