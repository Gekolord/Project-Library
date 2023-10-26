const myLibrary = [];
let content = document.getElementById('content');
let bookButton = document.getElementById('new');
let titleForm = document.getElementById('title');
let authorForm = document.getElementById('author');
let pagesForm = document.getElementById('pages');
let isRead = document.getElementById('isRead');
let submitBook = document.getElementById('submit');
let wholeForm = document.getElementById('form');
let exitButton = document.getElementById('exitButton');
// deletes book from library and from screen
function addDelete() {
    let deleteButtons = document.querySelectorAll('.deleteButton')
    for (const deleteButton of deleteButtons) {
        index = deleteButton.parentElement.parentElement.dataset.indexValue
        deleteButton.addEventListener('click', () => removeFromLibrary(index))
        deleteButton.addEventListener('click', () => removeAllChildNodes(content))
        deleteButton.addEventListener('click', () => display())


    }
}
// Changes read status inside library
function changeReadStatus(index) {
    switch(myLibrary[index].isRead) {
        case 'not read':
            myLibrary[index].isRead = 'read'
            break;
        case 'read':
            myLibrary[index].isRead = 'not read'
            break;
    }
}

// Changes displayed read status
function displayRead(parentNode) {
    index = parentNode.dataset.indexValue
    parentNode.children[3].innerHTML = myLibrary[index].isRead
}
// Adds functionality to change status butons
function changeStatusButtons() {
    let changeButtons = document.querySelectorAll('.changeStatus')
    for (changeButton of changeButtons) {
        let bookholder = changeButton.parentNode.parentNode;
        let index = bookholder.dataset.indexValue;
        changeButton.addEventListener('click', () => changeReadStatus(index))
        changeButton.addEventListener('click', () => displayRead(bookholder))
    }
}

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
// loops through library and assigns each book a data attribute in html
function assignData() {
    for (i in myLibrary) {

        content.children[i].dataset.indexValue = i

    } 
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
function addBookToLibrary(title, author, pages, isRead) {
    const myBook = new Book(title, author, pages, isRead)
    myLibrary.push(myBook)
}
// Checks if checkbox is checked and returns values depending on it
function isChecked() {
    if (isRead.checked) {
        return 'read'
    } else {
        return 'not read'
    }
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

        // let firstChild = containerDiv.children[0];
        // let secondChild = containerDiv.children[1];
        // const index = myLibrary.findIndex(object => {
        //     return object.title === `${firstChild.innerHTML}`
        //      && object.author === `${secondChild.innerHTML}`;
        //   });
        // firstChild.dataset.indexValue = `${index}`
        
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
        let changeStatus = document.createElement('button');
        changeStatus.className = 'changeStatus'
        changeStatus.innerHTML = 'Change status'
        buttonContainer.appendChild(changeStatus);
        
        deleteButton.addEventListener('click', () => deleteButton.parentElement.parentElement.remove())
        

    }
    assignData();
    addDelete();
    changeStatusButtons();
}
addBookToLibrary('sos', 'ss', 123, 'read');
addBookToLibrary('sos', 'ses', 123, 'read');
display();




bookButton.addEventListener('click', function() {
    wholeForm.style.display = 'block'
});

exitButton.addEventListener('click', function() {
    wholeForm.style.display = 'none'
    titleForm.value = ''
    authorForm.value = ''
    pagesForm.value = ''
    isRead.checked = false

})

// adds book to library, updates screen
submitBook.addEventListener('click', function(event){
    if (titleForm.value && authorForm.value && pagesForm.value) {

        addBookToLibrary(titleForm.value, authorForm.value, pagesForm.value, isChecked());
        event.preventDefault()
        removeAllChildNodes(content)
        display();
        wholeForm.style.display = 'none'
        titleForm.value = ''
        authorForm.value = ''
        pagesForm.value = ''
        isRead.checked = false
    }
});



