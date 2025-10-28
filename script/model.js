const model = {
    app:{
        currentPage: "home", // overView, registerBook, login
        isLoggedIn: false, // true
        darkMode: false, // true

        pages: ["home", "overView", "registerBook", "login"]
    },

    viewState:{
        home: {
            filterByRelease: 0, // nyest, eldst
            filterReadingStatus: 3, // read reading unread all
            searchbar: "",
            
        },

        loggin:{
            userName: "",
            passWord: "",
        },

        overView:{
            title: "",
            publisher: "",
            language: "",
            pages: "",
            isbn: "",
            publisherYear:"",
            img: "",
            rating: 0,
            details: "",
            editBook: false, // true
            readingStatus: 0, // read, reading, unread
            currentBookIDX: null,
        },

        registerBook:{
            title: "",
            publisher: "",
            language: "",
            pages: "",
            isbn: "",
            publisherYear:"",
            img: "",
            rating: "",
            details: "",
            readingStatus: 0 // read, reading, unread
        }
    },

    data:{
        dateState:[
            {id: 0, state: "Nyest"},
            {id: 1, state: "Eldst"}
        ],

        readingstatus:[
            {id: 0, status: "Unread"},
            {id:1, status: "Read"},
            {id:2, status: "Reading"},
            {id:3, status: "All"}
        ],

        admin:{
            username: "Admin",
            password: "123",
        },

        books: [
            {
            title: "Fifty shades of Grey",
            id: "book1",
            publisher: "bøker og morro", 
            language: "norsk", 
            pages: "500", 
            isbn: "1129837461", 
            publisherYear:"2000", 
            img: "pictures/Arts_50-Shades-of-grey1.png", 
            rating: 5, 
            details: "Veldig kul og morsom bok",
            readingStatus: "unread"
            },
            
            {
            title: "Harry Potter", 
            id: "book2",    
            publisher: "bøker og morro", 
            language: "english", 
            pages: "200", 
            isbn: "6329837422", 
            publisherYear:"2005", 
            img: "pictures/HP.jpg", 
            rating: 2, 
            details: "trollmen og hekser går på eventyr",
            readingStatus: "read"
            }
        ]
    }
}