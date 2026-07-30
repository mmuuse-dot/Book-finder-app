const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");

let currentBooks = [];


searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        searchBooks();
    }

});


// Sorting event
sortFilter.addEventListener("change", function(){

    const sortValue = sortFilter.value;

    let sortedBooks = [...currentBooks];

    if(sortValue === "title-asc"){

        sortedBooks.sort((a,b) =>
            a.title.localeCompare(b.title)
        );

    }

    else if(sortValue === "title-desc"){

        sortedBooks.sort((a,b) =>
            b.title.localeCompare(a.title)
        );

    }

    else if(sortValue === "newest"){

        sortedBooks.sort((a,b) =>
            new Date(b.volumeInfo.publishedDate || 0) -
            new Date(a.volumeInfo.publishedDate || 0)
        );

    }

    displayBooks(sortedBooks);

});


async function searchBooks(){

    const query = searchInput.value.trim();

    if(query === ""){

        showError("Please enter a book title or author.");

        return;

    }

    const books = await fetchBooks(query);

    currentBooks = books;

    displayBooks(books);

}


// Load some books when the page opens
window.addEventListener("load", async () => {

    const books = await fetchBooks("programming");

    currentBooks = books;

    displayBooks(books);

});
