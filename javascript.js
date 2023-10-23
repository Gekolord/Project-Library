const myLibrary = [];
let content = document.getElementById('content');

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// creates book and adds it to library
function addBookToLibrary(title, author, pages) {
    const myBook = new Book(title, author, pages)
    myLibrary.push(myBook)
}

// displays books on page
function display() {
    for (i in myLibrary) {
        // creates content card and appends it to content holder
        let containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        content.appendChild(containerDiv);
        // loops through each object and fills content card with content
        for (j in myLibrary[i]) {
            containerDiv.appendChild(document.createElement("p"))
            .textContent = j + ": " + myLibrary[i][j];
        }
    }
}

addBookToLibrary('sos', 'ses', 123);
addBookToLibrary('sos', 'ses', 123);
display();