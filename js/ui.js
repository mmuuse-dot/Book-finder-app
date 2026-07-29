function displayBooks(books) {

    const container = document.getElementById("bookContainer");
    container.innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(book => {

        const image = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "https://via.placeholder.com/250x350?text=No+Cover";

        const title = book.title || "Unknown Title";

        const author = book.author_name
            ? book.author_name.join(", ")
            : "Unknown Author";

        const year = book.first_publish_year || "Unknown";

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <img src="${image}" alt="${title}">

            <div class="book-info">

                <h3>${title}</h3>

                <p><strong>Author:</strong> ${author}</p>

                <p><strong>Published:</strong> ${year}</p>

                <div class="book-buttons">
                    <a href="https://openlibrary.org${book.key}" target="_blank">
                        View Book
                    </a>
                </div>

            </div>
        `;

        container.appendChild(card);

    });

}

function showLoading(show) {
    document.getElementById("loading").classList.toggle("hidden", !show);
}

function showError(message) {
    document.getElementById("errorMessage").textContent = message;
}

function clearError() {
    document.getElementById("errorMessage").textContent = "";
}
