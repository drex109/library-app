const myLibrary = [];

function Book(name, author, pageCount, read) {
    this.name = name;
    this.author = author;
    this.pageCount = Number(pageCount);
    this.read = Boolean(read);
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    this.id = crypto.randomUUID();
}

Book.prototype.boxClick = function() {
    this.read = !this.read;
    return this.read;
}

function addBookToLibrary(name, author, pageCount, read) {
    let book = new Book(name, author, pageCount, read);
    myLibrary.push(book);
}

const dialog = document.querySelector('dialog');
const openDialog = document.querySelector('#open-dialog');
const closeDialog = document.querySelector('#close-dialog');
const form = document.querySelector('#new-book');

openDialog.addEventListener('click', function (e) {
    dialog.showModal();
})
closeDialog.addEventListener('click', function(e) {
    dialog.close()
})

form.addEventListener('submit', function (e) {
    const data = Object.fromEntries(new FormData(form));
    data.read = data.read === 'true';
    addBookToLibrary(data.title, data.author, data.pageCount, data.read);
    displayBooks();
})

addBookToLibrary('The Hobbit', 'JRR Tolkien', '320', true);
addBookToLibrary('The Adventures of Huckleberry Finn', 'Mark Twain', '362', false);
addBookToLibrary('The Prose Edda', 'Snorri Sturluson', '300', true);

let books = document.querySelector('.books');

function displayBooks(){
    books.innerHTML = ''
    for(let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-uuid', myLibrary[i].id)
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

        const readToggle = document.createElement('div');
        readToggle.classList = 'read-toggle'
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.id = 'check ' + myLibrary[i].id;
        check.classList = 'check'

        let haveRead = myLibrary[i].read
        check.value = haveRead
        check.checked = haveRead;
        haveRead ? haveRead = 'Yes' : haveRead = 'No';

        const label = document.createElement('label');
        label.htmlFor = check.id;
        label.textContent = `Read: ${haveRead}`;

        readToggle.appendChild(check);
        readToggle.appendChild(label);

        book.appendChild(readToggle);

        check.addEventListener('change', (e) => {
            myLibrary[i].boxClick(e);

            if(e.target.checked) {
                label.textContent = 'Read: Yes'
            } else {
                label.textContent = 'Read: No'
            }
            check.checked = myLibrary[i].read;
            check.value = myLibrary[i].read;
        })

        const idCode = document.createElement('p')
        idCode.classList.add('id');
        idCode.textContent = myLibrary[i].id;
        book.appendChild(idCode);
        
        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove'
        book.appendChild(remove)
        remove.addEventListener('click', function(e) {
            myLibrary.splice(i, 1);
            books.removeChild(book);
        })
        
        book.style.backgroundColor = myLibrary[i].color
    }
}

displayBooks();