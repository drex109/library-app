function Book(name, author, pageCount) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
}

let hobbit = new Book("The Hobbit", "JRR Tolkien", "350");
console.log(hobbit);
