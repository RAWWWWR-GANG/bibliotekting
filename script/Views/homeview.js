function getBooks(){
    let html = "";
    for (let i = 0; i < model.data.books.length; i++){
    const book = model.data.books[i];
    html += /*HTML*/ `<div id="book${i}" class="book-item" data-status="${book.readingStatusId}" onclick="updateOverView(${i})">
        <div>${model.data.books[i].title}</div>
        <div>${model.data.books[i].publisher}</div>
        <div>${model.data.books[i].publisherYear}</div>
    </div>
    `
    
    };
    return html;
}