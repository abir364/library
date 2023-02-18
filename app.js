function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);

  this.info = () => {
    console.log(`${title} is written by ${author} has ${pages}+ pages`);
    // read ? (console.log(`You are reading ${title}`)) : (console.log(`You are reading ${title}`));
    if (read) {
      console.log(`You are reading${title}`);
    } else {
      console.log(`You are reading ${title}`);
    }
  };
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 310, false);
theHobbit.info();
