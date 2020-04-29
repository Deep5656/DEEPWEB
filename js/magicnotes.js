//trying to make a note making app.
console.log("welcome to the note app");
showNotes();



//if user add any note update it to the localstorage.

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value.toUpperCase(),
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();

});

// function to show notes.

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-3 card" style="width: 18rem;">

           
                <h5 class="card-title my-2 mx-3">${element.title}</h5>
                <p class="card-text my-2 mx-3 text">${element.text}</p>
                <button  id="${index}"  onclick="deletNote(this.id)" class="btn btn-primary my-2 mx-3">Delete Note</button>
            
                </div >`

    });
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        // notesElem.contentEditable = true;
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Nothig To Show First Add Any Note`;
    }
}
//function to delete any note.

function deletNote(index) {
    // console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//function for searching.

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    // console.log('input event fired',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    console.log(noteCards);
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })
})


//function for darkmode.
function myFunction() {
    let item = document.getElementById('body');
    item.classList.toggle('darkMode');
    let items = document.getElementById('body1');
    items.classList.toggle('darkMode');

    let btnName = document.getElementById('btnName');
    if (btnName.innerText.includes('Night Mode')) {
        btnName.innerText = "Day Mode";
        // console.log(btnName);
    }
    else {
        btnName.innerText = "Night Mode";
    }
    // console.log(btnName);

}


