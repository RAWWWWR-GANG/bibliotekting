import { model } from "../script/model.js";
function view(){
    let app = document.getElementById("app")
    app.innerHTML = model.data.books[0].publisher
}
view()