const http = require('http');

// Define the list of books
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  // Generate the HTML for the book list
  let html = '<html><head><title>Book List</title></head><body><table><thead><tr><th>Title</th><th>Author</th><th>Year</th></tr></thead><tbody>';
  books.forEach(book => {
    html += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td></tr>`;
  });
  html += '</tbody></table></body></html>';

  // Send the HTML as the response
  res.end(html);
});

// Start the server listening on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
