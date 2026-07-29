# BookFinder

BookFinder is a simple web application that helps users search for books using the Open Library API. Users can search by title or author, sort search results, view book details, and save favorite books using the browser's Local Storage.

**Link to live app:** *Add your deployed application URL here*

**Link to demo video:** *Add your demo video link here*

---

# Features

* Search books by title or author
* Display book covers, authors, and publication year
* Sort books by:

  * Relevance
  * Newest
  * Title (A–Z)
  * Title (Z–A)
* View book details on Open Library
* Save favorite books using Local Storage
* Responsive user interface

---

# Tech Stack

**Frontend**

* HTML5
* CSS
* JavaScript

**Deployment**

* Nginx
* HAProxy
* Git & GitHub

**API**

* Open Library Search API
* Open Library Covers API

---

# Prerequisites

* Modern web browser (Chrome, Firefox, Edge, etc.)
* Internet connection
* Git (optional, for cloning the repository)

---

# Installation

Clone the repository:

```bash
git clone https://github.com/username/.git
```

Enter the project folder:

```bash
cd Book-finder-app
```

---

# Run the Application

Option 1: Open `index.html` directly in your browser.

Option 2: Run a local web server:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

---

# Deployment and Load Balancer Configuration

The application is deployed using two web servers with HAProxy acting as the load balancer.

## Architecture Overview

* Two web servers host identical copies of the application.
* Nginx serves the static application files.
* HAProxy distributes incoming requests between both servers using the Round Robin algorithm.

---

# Web Server Deployment

On each web server:

Clone the repository:

```bash
git clone https://github.com/mmuuse-dot/Book-finder-app.git
```

Copy the project files to the Nginx web directory:

```bash
sudo cp -r Book-finder-app/* /var/www/html/
```

Restart Nginx:

```bash
sudo service nginx restart
```

Verify the deployment:

```bash
curl -I localhost
```

---

# Load Balancer Configuration

HAProxy distributes incoming traffic between both web servers.

Features:

* Round Robin load balancing
* HTTPS support
* HTTP to HTTPS redirection
* Health checks
* Custom `X-Served-By` header verification

Verify load balancing:

```bash
curl -kI https://localhost
```

or

```bash
for i in {1..6}; do curl -skI https://localhost | grep x-served-by; done
```

---

# End-to-End Request Flow

1. A user accesses the application through the load balancer.
2. HAProxy forwards the request to one of the web servers.
3. Nginx serves the BookFinder application.
4. JavaScript sends requests to the Open Library API.
5. Search results are displayed to the user.
6. Favorite books are stored in the browser using Local Storage.

---

# Summary

This deployment provides:

* High availability using two web servers
* Load balancing with HAProxy
* Static content served by Nginx
* Fast book searching through the Open Library API

---

# APIs Used and Attribution

### Open Library Search API

Documentation:

https://openlibrary.org/developers/api

Used for searching books by title or author.

### Open Library Covers API

Documentation:

https://openlibrary.org/dev/docs/api/covers

Used for displaying book cover images.

---

# Libraries and Resources

* HTML5
* CSS
* JavaScript
* Open Library API
* Nginx
* HAProxy

---

# Project Structure

```text
Book-finder-app/
│── index.html
│── README.md
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── storage.js
│   └── ui.js
├── .gitignore
├── screenshot
│
