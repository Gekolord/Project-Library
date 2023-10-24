const myLibrary = [];
let content = document.getElementById('content');
let bookButton = document.getElementById('new');



function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function removeFromLibrary(index) {
    myLibrary.splice(index, 1);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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
            .textContent = myLibrary[i][j];
        }
        // selects first child and sets data attribute with index inside of an array in it
        let firstChild = containerDiv.children[0];
        let secondChild = containerDiv.children[1];
        const index = myLibrary.findIndex(object => {
            return object.title === `${firstChild.innerHTML}`
             && object.author === `${secondChild.innerHTML}`;
          });
        firstChild.dataset.indexValue = `${index}`
        // Creates button container 
        let buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer'
        containerDiv.appendChild(buttonContainer);
        // Creates delete button
        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton'
        deleteButton.innerHTML = 'Delete book'
        buttonContainer.appendChild(deleteButton)
        // deletes book from library with click
        deleteButton.addEventListener('click', () => removeFromLibrary(index))
        deleteButton.addEventListener('click', () => deleteButton.parentElement.parentElement.remove())
        

    }
}
addBookToLibrary('sos', 'ss', 123);
addBookToLibrary('sos', 'ses', 123);
display();
const deleteButtons = document.querySelectorAll('.deleteButton')

for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', () => removeAllChildNodes(content))
    deleteButton.addEventListener('click', () => display())

}



bookButton.addEventListener('click', function() {
    const userInput = prompt('Please enter some text:');
    console.log(userInput);
});





