//for menubtn....

let navbtn = document.getElementById('navbtn');
navbtn.style = 'font-size:30px;cursor:pointer;position:absolute;top:26px;left:15px';

if(document.body.clientWidth<768){

    // console.log('deep');
    //for canvas in mobile view.
    let canvasView = document.getElementById('canvas')
    canvasView.style = 'display:none';
    console.log(canvasView); 
}



