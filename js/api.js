const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

async function fetchBooks(query) {
    try {
        showLoading(true);
        clearError();

        const response = await fetch(`${API_URL}${encodeURIComponent(query)}&maxResults=20`);

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

        const data = await response.json();

        showLoading(false);

        return data.items || [];

    } catch (error) {
        showLoading(false);
        showError(error.message);
        return [];
    }
}
