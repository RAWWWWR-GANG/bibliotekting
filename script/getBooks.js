function getBooks(){
    let html = ""
    for (let i = 0; i < model.data.books.length; i++){
    html += /*HTML*/ `<div id="${i}">
        <div>${model.data.books[i].title}</div>
        <div>${model.data.books[i].publisher}</div>
        <div>${model.data.books[i].publisherYear}</div>
    </div>
    `
    
    }
    return html;
}