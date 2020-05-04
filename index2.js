class Book {
    constructor(name, author, type,removeBook) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.removeBook = removeBook;
    }

}
class Display {
    

    add(book) {
        
         
        let tableBody = document.getElementById('tableBody');
        let uiString = ` <tr>
                        <td>${book.removeBook}</td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tableBody.innerHTML += uiString;

       
    }
    removeBook(){
        document.querySelector('#tableBody').addEventListener('click', (e) => {
            console.log(e.target);
            //  del(e.target);
            e.target.parentElement.remove();

        }
        )
    }
    
 

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length <= 2 || book.author.length <= 2) {
            return false;
        } else {
            return true;
        }

    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${displayMessage}</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }

}
// function removeBook() {
    
//    document.querySelector('#tableBody').addEventListener('click',(e)=>
//    {
//        console.log(e.target);
//     //  del(e.target);
//     e.target.parentElement.remove();
       
//    }
//    )
  
//  }
// function del(del) {
//     del.parentElement.remove();
// }





 



let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let mythology = document.getElementById('mythology');
    let removeBook = 'REMOVE BOOK';
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (mythology.checked) {
        type = mythology.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display1 = new Display();
    
    if (display1.validate(book)) {
        display1.add(book);
        display1.clear();
        display1.show('success', 'your book added successfully');
    }
    else {
        display1.show('danger', 'some error occured');
    }

    // for setting the wholevalue in the local storage.

    let notes = localStorage.getItem('bookObj');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(book);
    localStorage.setItem('bookObj', JSON.stringify(notesObj))



}


     






