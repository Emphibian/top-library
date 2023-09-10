function Book(title, author) {
  this.title = title;
  this.author = author;
}

let books = [
  new Book("The Hobbit", "J.R.R. Tolkien"),
  new Book("The Lies of Locke Lamora", "Scott Lynch"),
  new Book("The Hitchiker's guide to galaxy", "Douglas Adams"),
  new Book("The Adventures of Sherlock Holmes", "Sir Arthur Conan Doyle")
];

let booksContainer = document.querySelector(".books-container");

books.forEach((book) => {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  let titleHeading = document.createElement("h4");
  titleHeading.textContent = book.title;
  bookDiv.appendChild(titleHeading);

  let paragraphAuthor = document.createElement("p");
  paragraphAuthor.textContent = book.author;
  bookDiv.appendChild(paragraphAuthor);

  booksContainer.appendChild(bookDiv);
});
