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
    let count = joinerOutput.childNodes.length //number of text input boxes on the screen
    inputNumber.push(count)
    count++
    // console.log("input ", inputNumber)
    const joinerInput = document.createElement('input')
    joinerInput.className= 'joinerInputBox';
    joinerInput.type = 'text';
    joinerInput.placeholder = count;
    joinerOutput.appendChild(joinerInput);

});

//remove all input boxes
function clearAllJoinerFields(fields){
    while(fields.firstChild) {
        fields.removeChild(fields.firstChild);
    }
};

//reset fields
resetJoinerBtn.addEventListener("click", () => {
    //console.log(joinerOutput.childNodes)
    clearAllJoinerFields(joinerOutput)
    clearAllJoinerFields(joinedText)
});

//clear all input text fields and displayed h3 text


function clearInputText(){
    const inputBoxes = document.querySelectorAll('.joinerInputBox')
    joinedText.innerHTML = '';
    inputBoxes.forEach(inputBox => {
        inputBox.value = '';
    })
};

joinerTextRemove.addEventListener('click', clearInputText);

//add to page button
let showJoinerText = document.getElementById('joinerShowBtn');
let joinedText = document.getElementById('joinedText');

showJoinerText.addEventListener('click',addToMap)


//where the text values get displayed
const joinedStrings = new Map();


function addToMap() {
    clearAllJoinerFields(joinedText) //clear existing displayed text
    const inputBoxes = document.querySelectorAll('.joinerInputBox')
    inputBoxes.forEach(inputBox => {
        //user selectable delimiter
        let delimitVal = document.getElementById('delimiterInput').value
        let key = inputBox.placeholder;
        let value = inputBox.value;
        joinedStrings.set(key, value);
        // console.log(inputBox.placeholder)
        // console.log(inputBox.value)
        console.log(delimitVal);
        console.log(value+delimitVal)
        let h3 = document.createElement('h3');
        h3.id = key;
        h3.className = "joinedTextValue";
        h3.textContent = value.concat(delimitVal);
        joinedText.appendChild(h3);
    })
};

//take text values and display from map
function displayValues(){
    console.log(joinerOutput)
};

/////list compare
let list1Values = document.getElementById("list1");
let listOne = [];

let list2Values = document.getElementById("list2");
let listTwo = [];

//grab values from text area
function getListValues(list) {
    const textValues = list.value;
    const values = textValues.split(',').map(val => val.trim())
    list === list1Values ? listOne.push(values) : listTwo.push(values)  
    // console.log("1",listOne)
    // console.log("2",listTwo)
}

//simple string comparison

const stringCheck = document.getElementById('stringCheck')

stringCheck.addEventListener('click', (e) => {
    let testInput1 = document.getElementById('testInput1').value
    let testInput2 = document.getElementById('testInput2').value
    let h5 = document.getElementById('simpleOutput')
    if(testInput1 === testInput2){
        simpleCompare.classList.toggle("rightSimpleCompare",true)
        simpleCompare.classList.toggle("wrongSimpleCompare",false)
        h5.textContent = "Match"
    } else if (testInput1 !== testInput2) {
        simpleCompare.classList.toggle("wrongSimpleCompare",true)
        simpleCompare.classList.toggle("rightSimpleCompare",true)
        h5.textContent = "Negative"
    } else {
        h5.textContent = ""
    }
})

//get first textarea values
getListValues(list1Values)
//get second textarea values
getListValues(list2Values)

//iterate through lists to compare

function listCompare(first, second){
    const arr1 = [...first[0]]
    const arr2 = [...second[0]]
    console.log(arr1)
    //check arrays lengths
    if (arr1.length !== arr2.length){
        console.log("Lengths do not match");
    } else {
        console.log("Length match");
    }   
    //compare values and show values that are not in the other list
    let arr1Wrong = arr1.filter(item => !arr2.includes(item));
    let arr2Wrong = arr2.filter(item => !arr1.includes(item));
    let valCompare = arr1.every((val, index) => val === arr2[index])
    console.log(valCompare)
    // console.log("Only in 1st", arr1Wrong)
    // console.log("Only in 2nd", arr2Wrong)
}

listCompare(listOne, listTwo);