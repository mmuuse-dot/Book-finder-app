function saveFavorite(book) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some(item => item.title === book.title);

    if (!exists) {

        favorites.push(book);

        localStorage.setItem("favorites", JSON.stringify(favorites));

        alert("Book added to favorites!");

    } else {

        alert("This book is already in your favorites.");

    }

}
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

