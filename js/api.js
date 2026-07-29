async function fetchBooks(query) {
    try {
        showLoading(true);
        clearError();

        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch books.");
        }

        const data = await response.json();

        showLoading(false);

        return data.docs || [];

    } catch (error) {
        showLoading(false);
        showError(error.message);
        console.error(error);
        return [];
    }
}
