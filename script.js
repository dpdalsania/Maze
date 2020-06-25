document.onkeydown = logKey;

var maze = [
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'S', 'W', 'S', 'W', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'S', 'W', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'S', 'S', 'W'],
    ['W', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'W', 'W', 'S', 'W', 'S', 'W'],
    ['S', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'S'],
    ['W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W', 'W', 'W'],
    ['W', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'S', 'S', 'W', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'S', 'W', 'S', 'W'],
    ['W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
];

var selectedPointCurrent = [];
var selectedPointNext = [9, 0];
document.getElementById('0900').style.backgroundColor = 'red';
document.getElementById('0900').style.borderRadius = '50px';


function logKey (e) {
    if (e.keyCode == '38') {
        if (maze[selectedPointNext[0]-1][selectedPointNext[1]] !== 'W') {
            selectedPointCurrent[0] = selectedPointNext[0];
            selectedPointCurrent[1] = selectedPointNext[1];
            selectedPointNext[0] = selectedPointNext[0] - 1;
          //  console.log('up arrow')
            updatePosition();
        }
    }
    else if (e.keyCode == '40') {
        if (maze[selectedPointNext[0] + 1][selectedPointNext[1]] !== 'W') {
            selectedPointCurrent[0] = selectedPointNext[0];
            selectedPointCurrent[1] = selectedPointNext[1];
            selectedPointNext[0] = selectedPointNext[0] + 1;
            //console.log('down arrow')
            updatePosition();
        }
    }
    else if (e.keyCode == '37') {
        if (maze[selectedPointNext[0]][selectedPointNext[1] - 1] !== 'W') {
            selectedPointCurrent[0] = selectedPointNext[0];
            selectedPointCurrent[1] = selectedPointNext[1];
            selectedPointNext[1] = selectedPointNext[1] - 1;
           // console.log('left arrow')
            updatePosition();
        }
    }
    else if (e.keyCode == '39') {
        if (maze[selectedPointNext[0]][selectedPointNext[1] + 1] !== 'W') {
            selectedPointCurrent[0] = selectedPointNext[0];
            selectedPointCurrent[1] = selectedPointNext[1];
            selectedPointNext[1] = selectedPointNext[1] + 1;
           // console.log('right arrow')
            updatePosition();
        }
    }
}

function updatePosition () {
    let selectedPointCurrent0 = selectedPointCurrent[0];
    let selectedPointCurrent1 = selectedPointCurrent[1];
    let selectedPointNext0 = selectedPointNext[0];
    let selectedPointNext1 = selectedPointNext[1];
    if (selectedPointCurrent0 < 10) {
        selectedPointCurrent0 = '0' + selectedPointCurrent0;
    }
    if (selectedPointCurrent1 < 10) {
        selectedPointCurrent1 = '0' + selectedPointCurrent1;
    }
    document.getElementById(selectedPointCurrent0.toString() + selectedPointCurrent1.toString()).style.backgroundColor = 'lightblue';
    if (selectedPointNext0 < 10) {
        selectedPointNext0 = '0' + selectedPointNext0;
    }
    if (selectedPointNext1 < 10) {
        selectedPointNext1 = '0' + selectedPointNext1;
    }
    document.getElementById(selectedPointNext0.toString() + selectedPointNext1.toString()).style.backgroundColor = 'red';
    document.getElementById(selectedPointNext0.toString() + selectedPointNext1.toString()).style.borderRadius = '50%';
    if(selectedPointNext0.toString() == '09' && selectedPointNext1.toString() == '20'){
        console.log('Finished');
       let resultElement = document.getElementById('result');
                resultElement.innerHTML =  'Finished' 
                resultElement.style.display="block";
               document.getElementById('resultWrapper').style.display="flex";
              
    }
}



