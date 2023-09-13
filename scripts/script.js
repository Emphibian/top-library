let booksContainer = document.querySelector(".books-container");
let addBookDiv = document.querySelector(".add-book");
let removeBookDiv = document.querySelector(".remove-book");
let inputDialog = document.querySelector("#input-form");
let confirmBtn = document.querySelector("#confirm-btn");

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

function displayBooks() {
  booksContainer.innerHTML = "";
  books.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let titleHeading = document.createElement("h4");
    titleHeading.textContent = book.title;
    bookDiv.appendChild(titleHeading);

    let paragraphAuthor = document.createElement("p");
    paragraphAuthor.textContent = book.author;
    bookDiv.appendChild(paragraphAuthor);

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<img src=assets/trash-can-outline.svg alt="trash-can"></img>';
    removeBtn.addEventListener("click", () => {
      removeBookFromLibrary(book.title);
    })
    bookDiv.appendChild(removeBtn);

    booksContainer.appendChild(bookDiv);
  });
}

function addBooksToLibrary(title, author) {
  books.push(new Book(title, author));
  displayBooks();
}

function removeBookFromLibrary(title) {
  let index = books.findIndex((book) => book.title === title);
  books.splice(index, 1);
  displayBooks();
}

addBookDiv.addEventListener("click", () => {
  inputDialog.classList.add("input-dialog");
  inputDialog.showModal();
});

removeBookDiv.addEventListener("click", () => {
  booksContainer.scrollIntoView();
});

inputDialog.addEventListener("close", () => {
  inputDialog.classList.remove("input-dialog");
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  addBooksToLibrary(title, author);

  inputDialog.close();
});

displayBooks();
