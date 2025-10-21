const model = {
    app:{
        currentPage: "home", // overView, registerBook
        isLoggedIn: false, // true
        darkMode: false, // true

        pages: ["home", "overView", "registerBook"]
    },

    viewState:{
        home: {
            filterByRelease: 0, // nyest, eldst
            filterReadingStatus: "all", // read reading unread
            searchbar: "",
            
        },

        loggin:{
            userName: "",
            password: "",
        },

        overView:{
            title: "",
            publisher: "",
            language: "",
            pages: "",
            isbn: "",
            publisherYear:"",
            img: "",
            rating: "",
            details: "",
            editBook: false, // true
            readingStatus: 0 // read, reading, unread
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
            {id: 0, status: "unread"},
            {id:1, status: "read"},
            {id:2, status: "reading"}
        ],

        admin:{
            username: "Admin",
            password: "123",
        },

        books: [
            {
            title: "Fifty shades of Grey",
            id: 1,
            publisher: "bøker og morro", 
            language: "norsk", 
            pages: "500", 
            isbn: "1129837461", 
            publisherYear:"2000", 
            img: "pictures/Arts_50-Shades-of-grey1.png", 
            rating: "5", 
            details: "Veldig kul og morsom bok",
            readingStatus: "read"
            },
            
            {
            title: "Harry Potter", 
            id: 2,    
            publisher: "bøker og morro", 
            language: "english", 
            pages: "200", 
            isbn: "6329837422", 
            publisherYear:"2005", 
            img: "pictures/HP.jpg", 
            rating: "2", 
            details: "trollmen og hekser går på eventyr",
            readingStatus: "read"
            }
        ]
    }
}