//for menubtn....

let navbtn = document.getElementById('navbtn');
navbtn.style = 'font-size:30px;cursor:pointer;position:absolute;top:26px;left:15px';

//for logo...

let logo = document.querySelector('.logo');
logo.style = 'height: 40px; border-radius:50%; position: absolute;top: 32px;left: 105px'
// console.log(logo);
if(document.body.clientWidth<768){
    logo.style = 'height:0px;width:0px';
    // console.log('deep');
    //for canvas in mobile view.
    let canvasView = document.getElementById('canvas')
    canvasView.style = 'display:none';
    console.log(canvasView); 
}



