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


function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.innerHTML=`<span class="material-symbols-outlined">delete</span>`;
  deleteBtn.setAttribute('data-id', book.title);
  card.appendChild(deleteBtn);

  const title = document.createElement('h2');
  title.textContent=book.title;
  card.appendChild(title);

  const author = document.createElement('h3');
  author.textContent=`by ${  book.author}`;
  card.appendChild(author);

  const pages = document.createElement('p');
  pages.textContent=`page count: ${  book.pages}`;
  card.appendChild(pages);

  const read = document.createElement('p');
  read.textContent= book.read ? 'You read it' : 'You did not read it';
  card.appendChild(read);

  card.setAttribute('data-id', book.title);
  
  return card;
}



function printLibrary() {
  const cards = document.getElementById('card-container');
  cards.classList.add('cards');

  if (cards.hasChildNodes) {
    cards.innerHTML = '';
  }

  for (let i = 0; i < library.length; i+=1) {
    // console.log(library[i].title);
    cards.appendChild(createCard(library[i]));
  }
  const deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach((b) => {
    b.addEventListener('click', () => {
    const del = b.dataset.id;
    const curCard = cards.querySelector(`div[data-id="${del}"]`);
    cards.removeChild(curCard);
  });
});
}

function addBookToLibrary(book) {
  library.push(book);
  printLibrary();

  // const cards = document.getElementById('card-container');
  // cards.classList.add('cards');
  // const card = createCard(book);
  // card.setAttribute('data-id', book.title);
  // cards.appendChild(card);
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 310, false);
// theHobbit.info();
const theLOR = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1178, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theLOR);

// printLibrary();
const modal = document.querySelector('.modal');

const form = document.getElementById('form');
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  // console.log(form.read.checked);
  const newBook = new Book(form.title.value, form.author.value, form.page.value, form.read.checked);
  addBookToLibrary(newBook);
  // printLibrary();
  form.reset();
  modal.classList.add('remove-modal');
});

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
  modal.classList.remove('remove-modal');
});

const closeModal = document.querySelector('.modal-close');
closeModal.addEventListener('click', () => {
  modal.classList.add('remove-modal');
});

// const deleteBtns = document.querySelectorAll('.deleteBtn');
// deleteBtns.forEach((b) => {
//   console.log(b)
//   b.addEventListener('click', () => {
//     console.log(b.dataset.id);
//   });
// });