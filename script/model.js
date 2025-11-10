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
            rating: 0, 
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
            },

            {
            title: "Den siste saken", 
            id: "book3",    
            publisher: "Jørn Lier Horst", 
            language: "norsk", 
            pages: "363", 
            isbn: "6329837422", 
            publisherYear:"2025", 
            img: "pictures//horst.jpg", 
            rating: 4, 
            details: "En dag i oktober får William Wisting bekjed om at Erik Kaplin skal settes fri. Kaplin har sonet 18 år for drap - og laget seg en dødsliste over dem som medvirket i dommen. Øverst står Wistings navn.",
            readingStatus: "reading",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

            {
            title: "Koding for alle i JavaSCript", 
            id: "book4",    
            publisher: "Terje Kolderup", 
            language: "norsk", 
            pages: "299", 
            isbn: "9788202661243", 
            publisherYear:"2020", 
            img: "pictures/koding.jpg", 
            rating: 5, 
            details: "Koding for alle i JavaScript er boken for deg som vil lykkes med praktisk programmering. JavaScript er det perfekte nybegynnerspråket, samtidig som det er noe de fleste IT-utviklere må beherske siden det er viktig i webutvikling.",
            readingStatus: "read",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

            {
            title: "Eragon", 
            id: "book5",    
            publisher: "Christopher Paolini", 
            language: "engelsk", 
            pages: "509", 
            isbn: "9780375826689", 
            publisherYear:"2003", 
            img: "pictures/eragon.jpg", 
            rating: 3, 
            details: "When fifteen-year-old Eragon comes to learn that he is a gifted Dragon Rider, he realizes that his destiny is to fight the evil powers that will bring complete destruction to the Empire and so leaves his quiet life as a farm boy to succeed in his one true mission in life, in a deluxe edition which includes a foldout map, an expanded pronunciation guide, and an excerpt from the next book in the trilogy.",
            readingStatus: "read",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

            {
            title: "Fourth Wing", 
            id: "book6",    
            publisher: "Rebecca Yarros", 
            language: "engelsk", 
            pages: "512", 
            isbn: "9780349436999", 
            publisherYear:"2023", 
            img: "pictures/FourthWing.jpg", 
            rating: 0, 
            details: "Violet Sorrengail expected to live a quiet life surrounded by books, until she was forced onto the world''s deadliest training ground. Now she must fight to join the army''s elite: dragon riders. But dragons don''t choose fragile riders, they incinerate them, and when your body breaks as easily as Violet''s does - death is only a heartbeat away.",
            readingStatus: "unread",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

             {
            title: "Ulvestuen", 
            id: "book7",    
            publisher: "Jan-Erik Fjell", 
            language: "norsk", 
            pages: "299", 
            isbn: "9788234724831", 
            publisherYear:"2025", 
            img: "pictures/fjell.jpg", 
            rating: 0, 
            details: "Under en kjøretur med Magnus Torp ser Anton Brekke en han pågrep for drap mange år tidligere. Han forteller Torp om saken der den 22 år gamle studenten Susanne Leander ble funnet drept.",
            readingStatus: "unread",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

              {
            title: "The Secret of Secrets", 
            id: "book8",    
            publisher: "Dan Brown", 
            language: "engelsk", 
            pages: "688", 
            isbn: "9781787634558", 
            publisherYear:"2025", 
            img: "pictures/danb.jpg", 
            rating: 0, 
            details: "Accompanying celebrated academic, Katherine Solomon, to a lecture she’s been invited to give in Prague, Robert Langdon’s world spirals out of control when she disappears without trace from their hotel room. Far from home and well out of his comfort zone, Langdon must pit his wits against forces unknown to recover the woman he loves.",
            readingStatus: "unread",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

              {
            title: "Norges skjulte eventyr", 
            id: "book9",    
            publisher: "Halvor Harsem", 
            language: "norsk", 
            pages: "304", 
            isbn: "9788293625230", 
            publisherYear:"2025", 
            img: "pictures/norgesskjulte.jpg", 
            rating: 1, 
            details: "I denne boka viser Halvor Harsem, også kjent som Kong Halvor, fram noen av Norges mest spennende og unike plasser. Her utforskes både underjordiske tunneler, forlatte hus, nedlagte gruver og bunkere med mye historie knyttet til seg. Det hele fortelles med Halvors jordnære og humoristiske skrivestil, som oser av personligheten til en mann på over 30 år som fortsatt liker å klatre i trær.",
            readingStatus: "read",
            contentType: "pdf",
            contentURL: "files/fifty-shades-sample.pdf"
            },

            
        ]
    }
}