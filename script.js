


function playerChoice() {
   
    let choicePrompt = prompt("Please choose:\n" + "1. Move Forward\n" + "2. Move Backward\n" + "3. Turn Around\n" + "4. Current Location");
    switch (choicePrompt) {
        case "1":
                moveForward();
                // console.log(newLocation);
                printLocation();
            break;
        case "1":
            if (choicePrompt == 2){
                moveBackward();
                printLocation();
                // console.log(newLocation);
                
            }
            break;
        case "2":
            if (choicePrompt == 3){
                turnAround();
                printLocation();
            }
            break;
        case "3":
            if (choicePrompt == 4){
                printLocation();
            }
            break;                
        default: alert("Choose wisely.");
    }
} 

const location = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of location[i]) {
    let newLocation = location[i];
};

let direction = "right";

function turnAround() {
    if (direction = "right") {
        direction = "left";
    } else if (direction = "left") {
        direction == "right";
    }

}

function moveForward(num) {
    if (direction = "right"){
        newLocation = location[i]++;
    } else {
        newLocation = location[i]--;
    }
}

function moveBackward(num) {
    if (direction = "right"){
        newLocation = location[i]--;
    } else {
        newLocation = location[i]++;
    }
}

function printLocation() {
    console.log(location[i]);
    alert(`Current location is ${location[i]}. Watch your balance!`);

}


// while (location < 11) {
//     playerChoice();
// }

playerChoice();