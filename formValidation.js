console.log('this is form validation');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const submit = document.getElementById('submit');
const message = document.getElementById('textarea');

//for username


// console.log(name,email,number);
username.addEventListener('blur', () => {
    // console.log('username is blured');
    let regex = /^[\_\@\#a-zA-Z]([\@0-9a-zA-Z\_\.]){2,19}$/;
    let str = username.value;

    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('it matched');
        username.classList.remove('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdivset');
        let divTxt = document.createTextNode('* Valid Username');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox1');
        div1.appendChild(div);
        setTimeout(myheadset, 3000);
    }
    else {
        // console.log('not matched');
        username.classList.add('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdiv');
        let divTxt = document.createTextNode('* Username should not start with number and max up to 20 digits & gapping is not allowed b/w charset.');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox1');
        div1.appendChild(div);

        //  console.log(div,div1);
        setTimeout(myhead, 3000);
    }

})
function myhead() {
    let div2 = document.getElementById('formdiv');
    div2.remove();
}
function myheadset() {
    let div2 = document.getElementById('formdivset');
    div2.remove();
}


//for email.


email.addEventListener('blur', () => {
    // console.log('email is blured');
    let regex = /^([\_\.a-zA-Z0-9]+)@([\_\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('it matched');
        email.classList.remove('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdivset');
        let divTxt = document.createTextNode('* Valid Email');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox2');
        div1.appendChild(div);
        setTimeout(myheadset, 3000);
    }
    else {
        // console.log('not matched');
        email.classList.add('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdiv');
        let divTxt = document.createTextNode('* Email is invalid');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox2');
        div1.appendChild(div);

        // console.log(div, div1);
        setTimeout(myhead, 3000);
    }

})


//for numbers


number.addEventListener('blur', () => {
    // console.log('number is blured');
    let regex = /^([0-9]){10}$/;
    let str = number.value;

    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('it matched');
        number.classList.remove('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdivset');
        let divTxt = document.createTextNode('* Valid Number');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox3');
        div1.appendChild(div);
        setTimeout(myheadset, 3000);
    }
    else {
        // console.log('not matched');
        number.classList.add('invalid');
        let div = document.createElement('div');
        div.setAttribute('id', 'formdiv');
        let divTxt = document.createTextNode('* number should be of 10 digits');
        div.appendChild(divTxt);
        let div1 = document.getElementById('formbox3');
        div1.appendChild(div);

        // console.log(div, div1);
        setTimeout(myhead, 3000);
    }


});


// for submit

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let regex = /^([0-9]){10}$/;
    let str = number.value;
    // console.log(regex.test(str));
    let regex1 = /^([\_\.a-zA-Z0-9]+)@([\_\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str1 = email.value;

    let regex2 = /^[\_\@\#a-zA-Z]([\@0-9a-zA-Z\_\.]){2,19}$/;
    let str2 = username.value;
    if (regex.test(str) && regex1.test(str1) && regex2.test(str2)) {

        let alertBox = document.createElement('div');
        alertBox.id = 'alert';
        alertBox.setAttribute('style', 'background:#99FF99;height:25px;width:97%;color:green;position:fixed;top:0px;margin:0px;padding:20px;border-bottom:1px solid green;text-align:center;font-size:20px')
        let alertTxt = document.createTextNode('SUCCESS: Your form has been submitted');
        alertBox.appendChild(alertTxt);
        let alert = document.getElementById('divalert');
        alert.appendChild(alertBox);
        setTimeout(removeAlert, 8000);




        // console.log(submit)
        username.value = '';
        email.value = '';
        number.value = '';
        message.value = '';


    }

    else {

        let alertBox = document.createElement('div');
        alertBox.id = 'alert';
        alertBox.setAttribute('style', 'background:pink;height:25px;width:97%;color:red;position:fixed;top:0px;margin:0px;padding:20px;border-bottom:1px solid red;text-align:center;font-size:20px')
        let alertTxt = document.createTextNode('ERROR: some error occured');
        alertBox.appendChild(alertTxt);
        let alert = document.getElementById('divalert');
        alert.appendChild(alertBox);
        setTimeout(removeAlert, 8000);

    
       
    }

});
function removeAlert(){
    let alertBox= document.getElementById('alert');
    alertBox.remove();
}



