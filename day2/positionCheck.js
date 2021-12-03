// Part 1

// declare variables
let horizontal = 0;
let depth = 0;

// iterate over the input and track the three positions
//const input = document.body.textContent.split('\n').map( x => parseInt(x) );
const input = document.body.textContent.split('\n').map( x => x );
//console.log(input.slice(0, 12)); // use to view a subset and check outputting as intended
input.pop();

for (i = 0; i < input.length; i++) {
    let distance = parseInt(input[i].substr(input[i].length - 1, input[i].length));
    let direction = input[i].substr(0, input[i].length - 1);
    console.log("Instruction: " + direction + " " + distance);
    if (direction.includes("forward")) {
        horizontal += distance;
        console.log("Moving forward by " + distance);
    }
    else if (direction.includes("down")) {
        depth += distance;
        console.log("Moving down by " + distance);
    }
    else {
        depth -= distance;
        console.log("Moving up by " + distance);
    }
    console.log("Horizontal: " + horizontal);
    console.log("Depth: " + depth);
}

// test version with subset of 12
for (i = 0; i < 11; i++) {
    let distance = parseInt(input[i].substr(input[i].length - 1, input[i].length));
    let direction = input[i].substr(0, input[i].length - 1);
    console.log("Instruction: " + direction + " " + distance);
    if (direction.includes("forward")) {
        horizontal += distance;
        console.log("Moving forward by " + distance);
    }
    else if (direction.includes("down")) {
        depth += distance;
        console.log("Moving down by " + distance);
    }
    else {
        depth -= distance;
        console.log("Moving up by " + distance);
    }
    console.log("Horizontal: " + horizontal);
    console.log("Depth: " + depth);
}

return horizontal * depth;

// Part 2

// declare variables
let horizontal = 0;
let depth = 0;
let aim = 0;

// iterate over the input and track the three positions
//const input = document.body.textContent.split('\n').map( x => parseInt(x) );
const input = document.body.textContent.split('\n').map( x => x );
//console.log(input.slice(0, 12)); // use to view a subset and check outputting as intended
input.pop();

for (i = 0; i < input.length; i++) {
    let distance = parseInt(input[i].substr(input[i].length - 1, input[i].length));
    let direction = input[i].substr(0, input[i].length - 1);
    console.log("Instruction: " + direction + " " + distance);
    if (direction.includes("forward")) {
        horizontal += distance;
        depth = depth + (aim * distance)
        console.log("Moving forward by " + distance);
    }
    else if (direction.includes("down")) {
        aim += distance;
        console.log("Increasing aim by " + distance + " units");
    }
    else {
        aim -= distance;
        console.log("Decreasing aim by " + distance + " units");
    }
    console.log("Horizontal: " + horizontal);
    console.log("Depth: " + depth);
}
function revealResult() {
    return horizontal * depth;
}
revealResult();