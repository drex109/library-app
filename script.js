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

addBookToLibrary('The Hobbit', 'JRR Tolkien', '320');
addBookToLibrary('The Adventures of Huckleberry Finn', 'Mark Twain', '362');
addBookToLibrary('The Prose Edda', 'Snorri Sturluson', '300')
console.log(myLibrary)

let books = document.querySelector('.books');

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('book');
        books.appendChild(book);
        
        let title;
        if(myLibrary[i].name.length <= 10) {
            title = document.createElement('h2');
        } else {
            title = document.createElement('h3');
        }
        title.classList.add('title');
        title.textContent = `Title: ${myLibrary[i].name}`;
        book.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `Author: ${myLibrary[i].author}`;
        book.appendChild(author);

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = `Page Count: ${myLibrary[i].pageCount}`;
        book.appendChild(pages);

        const idCode = document.createElement('p')
        idCode.classList.add('id');
        idCode.textContent = myLibrary[i].id;
        book.appendChild(idCode);
    }
}

displayBooks();

// let hobbit = new Book("The Hobbit", "JRR Tolkien", "350");
// console.log(hobbit);
