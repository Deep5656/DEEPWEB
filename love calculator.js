
console.log("love Calculator");


// console.log(yourName,crushName);

function calculateLove(){
    let yourName = document.getElementById('input1');
    let crushName = document.getElementById('input2');
    let totalWords = yourName.value.length + crushName.value.length;
    let count = 0;
   
   // console.log(yourName.value.length,crushName.value,typeof(yourName.value));
    for(let i=0; i<yourName.value.length;i++){
       // console.log(yourName.value[i]);
       for(let j=0; j<crushName.value.length;j++){
        //    console.log(crushName.value[j]);
          if (yourName.value[6].toLowerCase() == crushName.value[j].toLowerCase()||yourName.value[1].toLowerCase() == crushName.value[j].toLowerCase()||yourName.value[4].toLowerCase() == crushName.value[j].toLowerCase() || yourName.value[2].toLowerCase() == crushName.value[j].toLowerCase()){
           
            count++;
           
            
        }
       }
    }
    // console.log(count/totalWords*100);
    let para = document.createElement('p');
    let paraTxt = document.createTextNode(`${yourName.value} has ${Math.round(count/totalWords*100)}% crush on ${crushName.value}`);
    let  demo = document.getElementById('demo');
    newPara = para.appendChild(paraTxt);
     demo.appendChild(para);

   // console.log(count);
}