"use strict";

let input1 = document.getElementById("input1");
let btn1 = document.getElementById("input1Button");
let outputText1 = document.getElementById("input1Text");
let reset = document.getElementById("reset1");
let upperCase = document.getElementById("upperCase");

//text filter

btn1.addEventListener("click", (e)=> {
    e.preventDefault();
    fixString();
});

function fixString(){
    let correctText = input1.value.replace(/[^a-zA-Z0-9\s]/g, '').trim()
        if(upperCase.checked) {
            outputText1.textContent = correctText.toUpperCase();
        } else {
            outputText1.textContent = correctText
        }
};

function clear(a) {
    a.textContent = ""
};

reset.addEventListener("click", (e) => {
    clear(outputText1)
});

///input joiner//////////////////////////////////////////////////
let   addNewInput = document.getElementById("addFieldBtn");
const joinerOutput = document.getElementById("joinerTextOutput"); //where text box values are displayed
const resetJoinerBtn = document.getElementById("resetJoinerBtn");
const joinerTextRemove = document.getElementById("removeAllJoinerTextBtn");


//add new text input field
addNewInput.addEventListener("click", (e) => {
    e.preventDefault();
    let inputNumber = [];
    let count = joinerOutput.childNodes.length //number of text input boxes
    inputNumber.push(count)
    count++
    // console.log("input ", inputNumber)
    const joinerInput = document.createElement('input')
    joinerInput.className= 'joinerInputBox';
    joinerInput.type = 'text';
    joinerInput.placeholder = inputNumber[0];
    joinerOutput.appendChild(joinerInput);

});


//remove all input boxes
function clearAllJoinerFields(fields){
    while(fields.firstChild) {
        fields.removeChild(fields.firstChild);
    }
};

resetJoinerBtn.addEventListener("click", () => {
    //console.log(joinerOutput.childNodes)
    clearAllJoinerFields(joinerOutput)
    clearAllJoinerFields(joinedText)
});

//clear all input text fields
function clearInputText(){
    const inputBoxes = document.querySelectorAll('.joinerInputBox')

    inputBoxes.forEach(inputBox => {
        inputBox.value = '';
    })
};

joinerTextRemove.addEventListener('click', clearInputText);

// let joinerText = document.querySelectorAll('.joinerInputBox')
//     joinerText.forEach(input => {
//         input.addEventListener('keypress', () => {
//             console.log("23123")
//         })
//     })

//add to page button
let showJoinerText = document.getElementById('joinerShowBtn');
let joinedText = document.getElementById('joinedText');

showJoinerText.addEventListener('click',addToMap)

//where the text values get displayed
const joinedStrings = new Map();

function addToMap() {
    const inputBoxes = document.querySelectorAll('.joinerInputBox')
    inputBoxes.forEach(inputBox => {
        let key = inputBox.placeholder
        let value = inputBox.value
        joinedStrings.set(key, value)
        // console.log(inputBox.placeholder)
        // console.log(inputBox.value)
        console.log(joinedStrings)
        let h3 = document.createElement('h3')
        h3.id = key
        h3.textContent = value
        joinedText.appendChild(h3)
    })
};

//take text values and display
function displayValues(){
    console.log(joinerOutput)
};
