showCard();

//function for storing the values in local storage.

let button = document.getElementById('button');
button.addEventListener('click', function (e) {
    let imageSource = document.getElementById('imginput1');
    let birdName = document.getElementById('imginput2');
    let aboutBird = document.getElementById('imginput3');
    // console.log(imageSource,birdName,aboutBird);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // console.log(notes);
    let myObj = {
        img: imageSource.value,
        birdname: birdName.value.toUpperCase(),
        aboutbird: aboutBird.value
    }
    notesObj.push(myObj);
    imageSource.value = "";
    birdName.value = "";
    aboutBird.value = "";
    localStorage.setItem('notes', JSON.stringify(notesObj));
    //console.log(notesObj.length);
    
    showCard();

})
//console.log(button);
//function to show the values.

function showCard() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    //console.log(notesObj);
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div id="notes">
        <div class="card" style="width: 18rem;">
        <img src="${element.img}" class="card-img" onclick="click()" alt="SPARROWLAND">
            <h5 class="card-title">${element.birdname}</h5>
            <p class="card-text">${element.aboutbird}</p>
           
            <button id="${index}" onclick="deletNote(this.id)" class="card-btn">Delete This Post</button>
    
    </div>
    </div>`

    });
    let notesElem = document.getElementById('notes');
    //console.log(notesElem);
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Nothig To Show First Add Any Note`;
    }
    //console.log(notesElem.innerHTML);

}
//function for deleting the card.

function deletNote(index) {
    //console.log("i am deleting ", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showCard();
   
}

// for searching

let search = document.getElementById('input');
search.addEventListener('input',function(){
  let searchValue= search.value.toUpperCase();
//   console.log(searchValue);
  let cards= document.getElementsByClassName('card');
 // console.log(cards);
  Array.from(cards).forEach(function(element){
      let cardName = element.getElementsByTagName('h5')[0].innerHTML;
      let cardPara= element.getElementsByTagName('p')[0].innerHTML.toUpperCase();
    //  console.log(cardName);
      if(cardName.includes(searchValue)||cardPara.includes(searchValue)){
          element.style.display="block"
      }
      else{
          element.style.display="none"
      }
  })
//   console.log(birdName);
})


