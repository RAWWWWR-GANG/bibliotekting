function updateOverView(bookIdx){
    const book = model.data.books[bookIdx]
    if (!model.viewState.overView.editBook){
    document.getElementById("app").innerHTML = /*html*/`
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
        document.getElementById("app").innerHTML = /*html*/`
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


function storeViewstate(){
    
}