

// Closures
// function makeFunc() {
//     let message = "Closures are cool!"
//     function displayMessage(){
//         console.log(message);
//     }
//     return displayMessage
// }

// const newFunc = makeFunc()
// newFunc()

// //Closures Emulating Private methods
// const counter = function(){
//     let privateCounter = 0
//     function changeVal(val){
//         privateCounter += val
//     }
//     return {
//         increment: function(){
//             changeVal(1)
//         },
//         decrement: function(){
//             changeVal(-1)
//         },
//         value: function () {
//             return privateCounter;
//         }
//     }
// }()

// console.log(counter.value());
// console.log(counter.increment());
// console.log(counter.value());


// console.log("We're connected");

function changeHeader(newColor) {
    const title = document.querySelector("#title");
    // debugger
    // title.innerText = newTitle;
    title.style.backgroundColor = newColor;
}

changeHeader("green");

function getAllNames() {
    let allNames = document.querySelectorAll('.pokemon');
    // console.log(allNames);
    for (i = 0; i < allNames.length; i++) {
        logName(allNames[i]);
    }
}

function logName(pokeHeader) {
    console.log(pokeHeader.innerHTML)
}

getAllNames();

function createRow(name, type, weight) {
    let newRow = document.createElement('tr')

    let newRowHead = document.createElement('th')
        newRowHead.innerText = name;

    let newTypeData = document.createElement('td')
        newTypeData.innerHTML = type;

    let newWeightData = document.createElement('td')
        newWeightData.innerHTML= weight;

    newRow.append(newRowHead, newTypeData, newWeightData);

    document.getElementById('table').appendChild(newRow);

    // debugger
}

createRow("Adam", "Cool", "100lbs");
createRow("Jake", "Fire", "10000 lbs");
createRow("Femi", "Phoenix", "10 lbs.");

function deleteRow(i) {
    document.getElementById("table").children[i].remove();
}