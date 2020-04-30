console.log('this is section .js');
let section = document.querySelector('section');
section.style='height:800px';
let boxing = document.getElementById('boxing');
let para = document.getElementById('para');
boxing.style ='display:inline;position:absolute;top:150px;width:400px';
para.style ='display:inline-block;position:absolute;top:0px;font-size:20px';
let photo = document.getElementById('photo');
photo.style = 'height:350px;width:150px';
let aboutMe = document.getElementById('about');
aboutMe.style = 'height:450px;width:150px;display:inline-block;color:white;position:absolute;top:150px;left:500px'

console.log(aboutMe,photo,para,boxing,section);