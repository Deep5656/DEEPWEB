let defaultSquareId, newSquareId, defaultTxtId, newTxtId, defaultImageId, newImageId, defaulth3id, newh3id;


// whole functionality of square
let squarebtn = document.getElementById('squarebtn');
squarebtn.addEventListener('click', () => {
    if (squarebtn.checked) {
        square();
        let squares = document.getElementById('heightContainer');

        let html = ` 
    height:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    position-x:
    <input type="number" class='input' placeholder="X-cord">
    position-y:
    <input type="number" class='input' placeholder="Y-cord">
    background-color:
    <input type="text" class='input' placeholder="Color">
    border:
    <input type="text" class='input' placeholder="ex: 2px solid red">
    border-radius:
    <input type="number" class='input' placeholder="number">
    Rotate:
    <input type="number" class='input' placeholder="number">

    <button id = 'squarebtn1' onclick="newsquare()">New Box</button>`

        //A div where all the option or navigation bar will be shown.

        squares.innerHTML = html;

        //grabed all the inputs in the nav bar.

        let squareInput = document.getElementsByTagName('input');
        for (let i = 0; i < squareInput.length; i++) {
            squareInput[i].addEventListener('input', () => {
                let div = document.getElementById(`${defaultSquareId}`);

                switch (squareInput[i]) {
                    case squareInput[3]:
                    case squareInput[4]:
                    case squareInput[5]:
                    case squareInput[6]:
                    case squareInput[7]:
                    case squareInput[8]:
                    case squareInput[9]:
                    case squareInput[10]:
                        div.setAttribute('style', `height:${squareInput[3].value}px;width:${squareInput[4].value}px;
                        border:2px solid white; position:fixed;left:${squareInput[5].value}px;top:${squareInput[6].value}px;
                        background:${squareInput[7].value};border:${squareInput[8].value};border-radius:${squareInput[9].value}px;
                        z-index:0;transform:rotate(${squareInput[10].value + 'deg'});`);

                }
            })
        }
    }


});



//  whole functionality of image

let imageBtn = document.getElementById('imagebtn');
imageBtn.addEventListener('click', () => {
    if (imageBtn.checked) {
        image();
        let images = document.getElementById('heightContainer');
        let imagehtml = ` 
    Height:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    Position-x:
    <input type="number" class='input' placeholder="X-cord">
    Position-y:
    <input type="number" class="input" placeholder='Y-cord'>
    Image:
    <input type="file" accept='image/*' onchange='openFile(event)' class="input" id='output'>
    background-size:
    <input type="number" class="input" placeholder='number'>
    Border:
    <input type="text" class="input" placeholder='ex: 2px solid black'>
    Border-radius:
    <input type="number" class="input" placeholder='number'>
    Rotate:
    <input type="number" class="input" placeholder='number'>
    <button id = 'imagebtn1' onclick="newImage()">New Image</button>`
        images.innerHTML = imagehtml;
        let imageInput = document.getElementsByTagName('input');
        for (let i = 0; i < imageInput.length; i++) {
            imageInput[i].addEventListener('input', () => {
                let div = document.getElementById(`${defaultImageId}`);
                switch (imageInput[i]) {
                    case imageInput[3]:
                    case imageInput[4]:
                    case imageInput[5]:
                    case imageInput[6]:
                    case imageInput[7]:
                    case imageInput[8]:
                    case imageInput[9]:
                    case imageInput[10]:
                    case imageInput[11]:
                        div.setAttribute('style', `height:${imageInput[3].value}px;width:${imageInput[4].value}px;
                       position:fixed;left:${imageInput[5].value}px;top:${imageInput[6].value}px;
                       display:inline-block;border:2px solid white;z-index:1;background-image:url('${output.src}');
                       background-size:${imageInput[8].value}px;overflow:hidden;border:${imageInput[9].value};
                       border-radius:${imageInput[10].value}px;transform:rotate(${imageInput[11].value}deg);background-repeat:no-repeat`);


                }
            })
        }


    }

})



//whole functionality of text.

let textBtn = document.getElementById('textbtn');
textBtn.addEventListener('click', () => {
    if (textBtn.checked) {
        text();
        let texts = document.getElementById('heightContainer');
        let texthtml = ` 
    font-size:
    <input type="number" class='input' placeholder="Height">
    Width:
    <input type="number" class='input' placeholder="Width">
    Position-x:
    <input type="number" class='input' placeholder="X-cord">
    Position-y:
    <input type="number" class="input" placeholder='Y-cord'>
    Put your text:
    <input type="text" id="input7" class="input" placeholder='text'>
    text-color:
    <input type="text" class="input" placeholder='Color'>
    Border:
    <input type="text" class="input" placeholder='ex: 2px solid black'>
    Border-radius:
    <input type="number" class="input" placeholder='number'>
    Rotate:
    <input type="number" class="input" placeholder='number'>
    Font-family:
    <input type="text" class="input" placeholder='font-family'>
    <button id = 'textbtn1' onclick="newTxt()">New Text</button>`

        texts.innerHTML = texthtml;
        texts.setAttribute('style', 'overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:flex;flex-direction:row');

        let textInput = document.getElementsByTagName('input');
        for (let i = 0; i < textInput.length; i++) {
            textInput[i].addEventListener('input', () => {
                let div = document.getElementById(`${defaultTxtId}`);
                switch (textInput[i]) {
                    case textInput[3]:
                    case textInput[4]:
                    case textInput[5]:
                    case textInput[6]:
                    case textInput[7]:
                    case textInput[8]:
                    case textInput[9]:
                    case textInput[10]:
                    case textInput[11]:
                    case textInput[12]:
                        div.setAttribute('style', `width:${textInput[4].value}px;
                       position:fixed;left:${textInput[5].value}px;top:${textInput[6].value}px;
                       display:inline-block;border:2px solid white;z-index:1;
                       overflow:hidden;border:${textInput[9].value};
                       border-radius:${textInput[10].value}px;transform:rotate(${textInput[11].value}deg);background-repeat:no-repeat`);


                        let h3 = document.getElementById(`${defaulth3id}`);
                        h3.innerText = `${textInput[7].value}`;
                        h3.setAttribute('style', `color:${textInput[8].value};font-size:${textInput[3].value}px;
                        font-family:${textInput[12].value};display:inline-block`);


                }
            })
        }


    }

})



//function for Text.

function text() {
    let h3 = document.createElement('h3');
    if (newh3id) {
        defaulth3id = newh3id;
    } else {
        defaulth3id = 'h3';
    }
    defaulth3id = newh3id || 'h3';
    h3.id = `${defaulth3id}`;

    let div = document.createElement('div');
    if (newTxtId) {
        defaultTxtId = newTxtId;
    } else {
        defaultTxtId = 'txt';
    }
    defaultTxtId = newTxtId || 'txt';
    div.id = `${defaultTxtId}`;

    div.setAttribute('style', 'overflow:scroll;height:800px;')

    let container = document.getElementById('container');
    container.appendChild(div);
    div.appendChild(h3);
}
function newTxt() {
    newTxtId = Math.random() * 1000000000000000000000000000;
    newh3id = Math.random() * 1000000000000000000000000000;
    text();
    textbtn.checked;
    let newtextInput = document.getElementsByTagName('input');
    for (let i = 0; i <= newtextInput.length; i++) {
        newtextInput[i].value = '';
    }
}

//function for square.


function square() {
    let div = document.createElement('div');
    if (newSquareId) {
        defaultSquareId = newSquareId;
    } else {
        defaultSquareId = 'square';
    }
    defaultSquareId = newSquareId || 'square';
    div.id = `${defaultSquareId}`;
    div.setAttribute('style', 'overflow:scroll;height:800px;')
    let container = document.getElementById('container');
    container.appendChild(div);
}


//for taking input from user as newId.

function newsquare() {
    newSquareId = Math.random() * 100000000000000000000000;
    square();
    squarebtn.checked;
    let newSquareInput = document.getElementsByTagName('input');
    for (let i = 0; i <= newSquareInput.length; i++) {
        newSquareInput[3].value = '100';
        newSquareInput[4].value = '100';
        newSquareInput[5].value = '100';
        newSquareInput[6].value = '200';
    }
}

//function for images.

function image() {
    let div = document.createElement('div');
    if (newTxtId) {
        defaultImageId = newImageId;
    } else {
        defaultImageId = 'image';
    }
    defaultImageId = newImageId || 'image';
    div.id = `${defaultImageId}`;
    div.setAttribute('style', 'overflow:scroll;height:800px;')


    let container = document.getElementById('container');
    container.appendChild(div);
}
function newImage() {
    newImageId = Math.random() * 1000000000000000000;
    image();
    imagebtn.checked;
    let newimageInput = document.getElementsByTagName('input');
    for (let i = 0; i <= newimageInput.length; i++) {
        newimageInput[i].value = '';
    }
}


// for choosing photos from your device.


var openFile = function (file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};







