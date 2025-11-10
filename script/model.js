const model = {
    app:{
        currentPage: "login", // home, overView, registerBook, login, admin
        isLoggedIn: false, // true
        adminIsLoggedIn: false, //true
        currentUserId: "",
        darkMode: true, // false

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
            readingStatus: 0, // read, reading, unread
            contentType: "",
            contentURL: "",
            _blobURL: "",
            _fileName: "",
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

        users:[
            {
                id: "user0",
                username: "Admin",
                password: "123",
                role: "admin"
            },

            {
                id: "user1",
                username: "Geir12",
                password: "123",
                role: "gjest" //gjest venn admin
            },
            
            {
                id: "user2",
                username: "Emil12",
                password: "123",
                role: "venn"
            }
        ],

        books: [
            {
            title: "Fifty shades of Grey",
            id: "book1",
            publisher: "E.L. James", 
            language: "english", 
            pages: "514", 
            isbn: "1129837461", 
            publisherYear:"2011", 
            img: "pictures/Arts_50-Shades-of-grey1.png", 
            rating: 5, 
            details: "Fifty Shades of Grey er en erotisk romat som utforsker det intense og kompliserte forholdet mellom den naive litteraturstudenten Anastasia Seele og den karismatiske milliarderen Christian Grey. Boken starter når Ana intervjuer Christian og de umiddelbart føler en sterk, gjensidig tiltrekning. Det som følger er en reise inn i Christians verden av mørke seksuelle hemmeligheter. Han introduserer Ana for BDSM og ønsker en relasjon basert på en streng dominant/underdanig-kontrakt. Romamen balanser mellom Anas spirerende følelser for Christian og hennes indre kamp med hans behov for absoull kontroll. Hovedtemaet er makt, begjær og utforskning av seksuelle grenser.",
            readingStatus: "unread",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },
            
            {
            title: "Harry Potter", 
            id: "book2",    
            publisher: "J. K. Rowling", 
            language: "english", 
            pages: "672", 
            isbn: "6329837422", 
            publisherYear:"2005", 
            img: "pictures/HP.jpg", 
            rating: 2, 
            details: "Harry Potter og Halvblodsprinsen er den sjette romanen i J.K. Rowlings populære Harry Potter-serie",
            readingStatus: "read",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            }
        ]
    }
}