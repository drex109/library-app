const myLibrary = [];

function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pageCount) {
    let book = new Book(name, author, pageCount);
    console.log(book);
    myLibrary.push(book);
    
}

addBookToLibrary('The Hobbit', 'JRR Tolkien', '450');
console.log(myLibrary)

// let hobbit = new Book("The Hobbit", "JRR Tolkien", "350");
// console.log(hobbit);
