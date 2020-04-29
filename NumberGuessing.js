let name = prompt('Enter Your Name');
let updateName = document.getElementById('welcome');
updateName.innerText = 'Welcome ' + name;
// console.log(updateName.innerText);
// console.log(updateName);


let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

function guess(){
    
    let input = document.getElementById('input');
    if(input.value == randomNumber){
       endGame();
       input.value = "";
    }
    else if(input.value <= randomNumber){
        let para = document.createElement('p');
        let paraTxt = document.createTextNode(`your number  ${input.value} is Too Low`);
        para.style.color = "red";
        let paraGraph = document.getElementById('demo');
        para.appendChild(paraTxt);
        paraGraph.appendChild(para);
        input.value = "";
    }
    else if( input.value === null){
        let para = document.createElement('p');
        let paraTxt = document.createTextNode(`please enter any number`);
        let paraGraph = document.getElementById('demo');
        para.appendChild(paraTxt);
        paraGraph.appendChild(para);
        input.value = "";
    }
    
    else{
        let para = document.createElement('p');
        let paraTxt = document.createTextNode(`your number ${input.value} is Too High`);
        para.style.color="Blue";
        let paraGraph = document.getElementById('demo');
        para.appendChild(paraTxt);
        paraGraph.appendChild(para);
        input.value = "";
    }

}
function endGame(){
     let para = document.createElement('p');
     let paraTxt = document.createTextNode(`you Gussed the right number ${input.value} and won the game`);
     para.style.color = "green";
     let paraGraph = document.getElementById('demo');
     para.appendChild(paraTxt);
     paraGraph.appendChild(para);
    alert(`you Gussed the right number ${input.value} and won the game`);

}
