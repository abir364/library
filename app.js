const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
}

Book.prototype.info = function() {
  console.log(`${this.title} is written by ${this.author} has ${this.pages} pages`);
  // read ? (console.log(`You are reading ${title}`)) : (console.log(`You are reading ${title}`));
  if (this.read) {
    console.log(`You are reading${this.title}`);
  } else {
    console.log(`You are not reading ${this.title}`);
  }
};

function addBookToLibrary(book) {
  library.push(book);
}

function createCard(book) {
  console.log(book);
  console.log(this);
}

function printLibrary() {
  const cards = document.getElementById('container');

  for (let i = 0; i < library.length; i+=1) {
    console.log(library[i].title);
    createCard(library[i]);
  }
}



const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 310, false);
theHobbit.info();
const theLOR = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 610, true);


addBookToLibrary(theHobbit);
addBookToLibrary(theLOR);
printLibrary();