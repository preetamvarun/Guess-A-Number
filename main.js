const btn = document.getElementById('submit');
const numberField = document.getElementById('number');


function fun(){
    let number = parseInt(numberField.value);
}

btn.addEventListener('click', fun);