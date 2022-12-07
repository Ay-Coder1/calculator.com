

//     let num1 = document.getElementById('num1');
//     let num2 = document.getElementById('num2');
//     let answer = document.getElementById('answer');

// function getResult() {
//     let result = num1.value * num2.value;
//     answer.value = result;
//     num1.value = '';
//     num2.value = '';
// }
// function getAnswer() {
//     let result =  parseFloat(num1.value)+ parseFloat(num2.value);
//     answer.value = result;
//     num1.value = '';
//     num2.value = '';
// }
// function getValue() {
//     let result = num1.value / num2.value;
//     answer.value = result;
//     num1.value = '';
//     num2.value = '';
// }
// function getTotal() {
//     let result = num1.value - num2.value;
//     answer.value = result;
//     num1.value = '';
//     num2.value = '';
// }

// if(num1 == 2){
//     console.log('yes it is a number');
// }else{
//     console.log('it is a string');
// }

function display(val){
    document.getElementById('result').value += val;
}
function solve() {
    let x= document.getElementById('result').value
    let y= eval(x);
    document.getElementById('result').value =y
}
function clearScreen() {
    document.getElementById('result').value='';
}
     
