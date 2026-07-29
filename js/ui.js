function displayBooks(books) {

    const container = document.getElementById("bookContainer");

    container.innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(book => {

        const info = book.volumeInfo;

        const image = info.imageLinks
            ? info.imageLinks.thumbnail
            : "https://via.placeholder.com/128x190?text=No+Image";

        const title = info.title || "Unknown Title";

        const author = info.authors
            ? info.authors.join(", ")
            : "Unknown Author";

        const description = info.description
            ? info.description.substring(0,120) + "..."
            : "No description available.";

        const preview = info.previewLink || "#";

        const category = info.categories
            ? info.categories.join(", ")
            : "Unknown";

        const rating = info.averageRating || "N/A";

        const card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <img src="${image}" alt="${title}">

            <div class="book-info">

                <h3>${title}</h3>

                <p><strong>Author:</strong> ${author}</p>

                <p><strong>Category:</strong> ${category}</p>

                <p><strong>Rating:</strong> ⭐ ${rating}</p>

                <p>${description}</p>

                <div class="book-buttons">

                    <a href="${preview}" target="_blank">Preview</a>

                    <button onclick='saveFavorite(${JSON.stringify(info)})'>
                        ❤ Favorite
                    </button>

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
