const searchBtn = document.getElementById("searchBtn");

const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        searchBooks();
    }

});

async function searchBooks(){

    const query = searchInput.value.trim();

    if(query === ""){

        showError("Please enter a book title or author.");

        return;

    }

    const books = await fetchBooks(query);

    displayBooks(books);

}

// Load some books when the page opens
window.addEventListener("load", async () => {

    const books = await fetchBooks("programming");

    displayBooks(books);

});
