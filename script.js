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
const dialog = document.querySelector('dialog');
const openDialog = document.querySelector('#open-dialog');
const form = document.querySelector('#new-book');

openDialog.addEventListener('click', function (e) {
    dialog.showModal();
})

form.addEventListener('submit', function (e) {
    const data = Object.fromEntries(new FormData(form));
    console.log(data);
    myLibrary.length = 0;
    addBookToLibrary(data.title, data.author, data.pageCount);
    displayBooks();
})

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

        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove'
        book.appendChild(remove)
        remove.addEventListener('click', function(e) {
            books.removeChild(book);
        })

    }
}

displayBooks();


// let hobbit = new Book("The Hobbit", "JRR Tolkien", "350");
// console.log(hobbit);
