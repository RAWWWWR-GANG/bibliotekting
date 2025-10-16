export const model = {
    app:{
        currentPage: "home", // overView, registerBook
        isLoggedInn: false, // true
        darkMode: false, // true
    },

    viewState:{
        home: {
            filterByRelease: "newest", // oldest
            filterReadingStatus: "all", // read reading unread
            searchbar: "",
            userName: "",
            password: "",
        },

        overView:{
            publisher: "",
            language: "",
            pages: "",
            isbn: "",
            publisherYear:"",
            img: "",
            rating: "",
            details: "",
            editBook: false, // true
            readingStatus: "" // read, reading, unread
        },

        registerBook:{
            publisher: "",
            language: "",
            pages: "",
            isbn: "",
            publisherYear:"",
            img: "",
            rating: "",
            details: "",
            readingStatus: "" // read, reading, unread
        }
    },

    data:{
        admin:{
            username: "Admin",
            password: "123",
        },

        books: [
            {publisher: "bøker og morro", 
            language: "norsk", 
            pages: "500", 
            isbn: "1129837461", 
            publisherYear:"2000", 
            img: "pictures/Arts_50-Shades-of-grey1.png", 
            rating: "5", 
            details: "Veldig kul og morsom bok",
            readingStatus: "read"
            },
            
            {publisher: "bøker og morro", 
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