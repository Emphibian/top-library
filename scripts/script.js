let booksContainer = document.querySelector('.books-container');
let addBookDiv = document.querySelector('.add-book');
let removeBookDiv = document.querySelector('.remove-book');
let inputDialog = document.querySelector('#input-form');
let confirmBtn = document.querySelector('#confirm-btn');
let cancelBtn = document.querySelector('#cancel-btn');

function Book(title, author, haveRead) {
  this.title = title;
  this.author = author;
  this.haveRead = haveRead;
}

let books = [
  new Book('The Hobbit', 'J.R.R. Tolkien', true),
  new Book('The Lies of Locke Lamora', 'Scott Lynch', true),
  new Book("The Hitchhiker's Guide to Galaxy", 'Douglas Adams', false),
  new Book('The Adventures of Sherlock Holmes', 'Sir Arthur Conan Doyle', true),
];

function displayBooks() {
  booksContainer.innerHTML = '';
  books.forEach((book) => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    let titleHeading = document.createElement('h4');
    titleHeading.textContent = book.title;
    bookDiv.appendChild(titleHeading);

    let paragraphAuthor = document.createElement('p');
    paragraphAuthor.textContent = book.author;
    bookDiv.appendChild(paragraphAuthor);

    let btnDiv = document.createElement('div');

    let readBtn = document.createElement('button');
    readBtn.classList.add('read-button');
    readBtn.textContent = book.haveRead ? 'Read' : 'Not read';
    readBtn.addEventListener('click', () => {
      book.haveRead = book.haveRead ? false : true;
      displayBooks();
    });
    btnDiv.appendChild(readBtn);

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('book-button');
    removeBtn.innerHTML =
      '<img src=assets/trash-can-outline.svg alt="trash-can"></img>';
    removeBtn.addEventListener('click', () => {
      removeBookFromLibrary(book.title);
    });
    btnDiv.appendChild(removeBtn);
    bookDiv.appendChild(btnDiv);

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

addBookDiv.addEventListener('click', () => {
  inputDialog.classList.add('input-dialog');
  inputDialog.showModal();
});

removeBookDiv.addEventListener('click', () => {
  booksContainer.scrollIntoView();
});

inputDialog.addEventListener('close', () => {
  inputDialog.classList.remove('input-dialog');
});

confirmBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const titleError = document.querySelector('#title + span.error');
  const authorError = document.querySelector('#author + span.error');

  titleError.textContent = '';
  authorError.textContent = '';
  titleError.className = 'error';
  authorError.className = 'error';

  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Title cannot be empty!';
    titleError.className = 'error active';
    titleInput.setCustomValidity('Title cannot be empty!');
    return;
  } else if (authorInput.validity.valueMissing) {
    authorError.textContent = 'Author name cannot be empty!';
    authorError.className = 'error active';
    authorInput.setCustomValidity('Author name cannot be empty!');
    return;
  }

  addBooksToLibrary(titleInput.value, authorInput.value);
  inputDialog.close();
});

cancelBtn.addEventListener('click', () => {
  inputDialog.close();
});

displayBooks();
