console.log("this is main js library");
var books = [];
// Constructor
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// display function 
function Display(book){

}

//add methods to display prototype
Display.prototype.add = function(book){
    let tbody = document.getElementById('tbody');
    let uistring = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`
    tbody.innerHTML += uistring; 
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function(book) {
    if(book.name.length < 3 || book.author.length < 3){
        alert("book and author names should have atleast 3 letters");
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = (msg) => {
    const message_box = document.getElementById("msg");
        message_box.innerHTML = `    
        <div id="msg_box" class="alert alert-warning alert-dismissible fade show" role="alert">
            <div class="text-center">${msg}</div>
        </div>`;
    setTimeout(() => {
        message_box.innerHTML = "";
    }, 2000);
}

// add event listener for the forn button
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("you have submitted library form");
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let cs = document.getElementById("cs");
    let cooking = document.getElementById("cooking");
    let type;
    if(fiction.checked){
        type = fiction.value;
    }
    else if(cs.checked){
        type = cs.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    let book = new Book(name,author,type);
    books.push(book);
    console.log(books);

    let display = new Display();
    if (display.validate(book)){
        display.add(book);
        display.show("Successfully added!");
        display.clear();
    }
});

//search functionality
const search = document.getElementById("searchTxt");
search.addEventListener("input", (event) => {
    
    window.scrollTo(0,600);
    
    input = event.target.value;
    root = document.getElementById('tbody').children;

    Array.from(root).map((i) => {
        book_row = Array.from(i.children);
        let title = book_row[0].innerHTML;
        let writer = book_row[1].innerHTML;
        if(title.includes(input)||writer.includes(input)){
            i.style.display = "table-row";
        }
        else{
            i.style.display = "none";
        }
    });
});

search