function updateView(){
    applyTheme();
    const page = model.app.currentPage
    if (page === "home"){
        updateViewHome();
    }
    else if (page === "overView"){
        updateOverView(model.viewState.overView.currentBookIDX);
    }
    else if (page === "registerBook"){
        updateRegisterBook();
        }
    else if (page === "login"){
        updateLoginView();
        }
}





