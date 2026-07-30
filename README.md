# BookFinder 📚

BookFinder is a web application that helps users discover and search for books using the Open Library API.

Users can search books by title or author, sort results, view book details, and save favorite books using browser Local Storage.

---

# Why this exists

Finding a good book can be difficult because online catalogs contain millions of books, making it challenging to discover relevant books quickly.

BookFinder solves this problem by providing a simple search experience where users can explore books, view important information such as authors and publication years, and save books they are interested in.

The goal of this application is to make book discovery faster, easier, and more accessible.

---

# Live Demo

🌐 Live application:

```
Add your deployed URL here
```

🎥 Demo video:

```
Add your demo video link here
```

---

# Features

- Search books by title or author
- Display book covers, authors, and publication year
- Sort search results by:
  - Relevance
  - Newest books
  - Title (A-Z)
  - Title (Z-A)
- View detailed book information
- Save favorite books using Local Storage
- Favorites remain saved after refreshing the page
- Responsive user interface
- Error messages for failed searches and API issues

---

# Tech Stack

## Frontend

- HTML5
- CSS
- JavaScript

## APIs

- Open Library Search API
- Open Library Covers API

## Deployment

- Ubuntu Linux
- Nginx
- HAProxy
- Git & GitHub

---

# APIs Used and Attribution

## Open Library Search API

Used for retrieving:

- Book titles
- Authors
- Publication information
- Book identifiers

Documentation:

https://openlibrary.org/developers/api


## Open Library Covers API

Used for retrieving and displaying book cover images.

Documentation:

https://openlibrary.org/dev/docs/api/covers


All book data displayed in this application comes from Open Library APIs.

Special thanks to the Open Library team for providing free access to public book data.

---

# Running Locally

## Requirements

- Modern web browser
- Internet connection
- Git (optional)


## Clone Repository

```bash
git clone https://github.com/mmuuse-dot/Book-finder-app.git

cd Book-finder-app
```

---

## Run Application

BookFinder is a static frontend application, so no package installation is required.

You can open:

```
index.html
```

directly in your browser.

Or run a local server:

```bash
python3 -m http.server 8000
```

Open:

```
http://localhost:8000
```

---

# Application Architecture

The application uses a client-side architecture with a distributed server deployment.

```
                  User
                    |
                    |
             HAProxy Load Balancer
                    |
          -----------------------
          |                     |
       Web-01                Web-02
          |                     |
        Nginx                 Nginx
          |                     |
          -----------------------
                    |
            BookFinder Files
                    |
           Open Library API
```

---

# Deployment Configuration

The application is deployed on two web servers:

- Web-01
- Web-02

HAProxy is used as the load balancer.

Traffic flow:

1. User sends a request to the load balancer.
2. HAProxy distributes requests between Web-01 and Web-02.
3. Nginx serves the BookFinder application files.
4. JavaScript communicates with Open Library APIs.
5. Results are displayed to the user.

---

# Web Server Deployment

The same application is deployed on both web servers.

Clone the repository:

```bash
git clone https://github.com/mmuuse-dot/Book-finder-app.git

cd Book-finder-app
```

Nginx is configured to serve the application:

```nginx
root /home/ubuntu/Book-finder-app;
```

Test Nginx configuration:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

Verify deployment:

```bash
curl -I localhost
```

Expected response:

```
HTTP/1.1 200 OK
```

---

# Load Balancer Configuration

HAProxy distributes traffic between both web servers using the Round Robin algorithm.

Features:

- Round Robin load balancing
- HTTPS support
- HTTP to HTTPS redirection
- Health checks
- X-Served-By header verification

Example configuration:

```haproxy
backend web_servers
    balance roundrobin

    server web-01 <WEB01_IP>:80 check
    server web-02 <WEB02_IP>:80 check
```

---

# Testing Load Balancing

Run:

```bash
for i in {1..6}; do curl -skI https://localhost | grep -i x-served-by; done
```

Example output:

```
x-served-by: 7182-web-01
x-served-by: 7182-web-02
x-served-by: 7182-web-01
x-served-by: 7182-web-02
```

This confirms that HAProxy is successfully distributing traffic between both servers.

---

# Error Handling

The application handles common issues including:

- Empty search requests
- No books found
- API request failures
- Network problems
- Invalid responses



# Project Structure

```
Book-finder-app/

├── index.html
├── README.md

├── css/
│   ├── style.css
│   └── responsive.css

├── js/
│   ├── api.js
│   ├── app.js
│   ├── storage.js
│   └── ui.js

├── screenshot/

└── .gitignore
```


GitHub:

https://github.com/mmuuse-dot
