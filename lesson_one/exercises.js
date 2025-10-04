const exOne = (stringaArr) => {
    let result = "";

    stringaArr.forEach(element => result += element);

    return result;
}

const exTwo = (stringOne, stringTwo) => {
    if (stringOne.length != stringTwo.length) {
        return -1;
    }

    let counter = 0;

    for (let i = 0; i < stringOne.length; i++) {
        if (stringOne.charAt(i) !== stringTwo.charAt(i)) {
            counter++;
        }
    }

    return 
    counter;
}

const exThree = (string, letter) => {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).toLowerCase() === letter.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

const exFour = (arr, arrTwo) => {
    if (arr.length !== arrTwo.length) {
        throw new Error("Arrays must be the same length.");
    }

    const result = new Array;

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        result.push(arrTwo[i]);
    }

    return result;
}

const exFive = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum/arr.length;
}

const arr = ["J", "o", "h", "n"];
const arrTwo = ["D", "o", "e", "!"];
const arrThree = [1, 2, 3, 4];

console.log("Ex 1:");
console.log(exOne(arr));

console.log("\n-------------------------------------------\n\n");

console.log("Ex 2:");
console.log(exTwo("Mihai", "Mahiii"));

console.log("\n-------------------------------------------\n\n");

console.log("Ex 3:");
console.log(exThree("Animal", "a"));

console.log("\n-------------------------------------------\n\n");

console.log("Ex 4:");
console.log(exFour(arr, arrTwo));

console.log("\n-------------------------------------------\n\n");

console.log("Ex 5:");
console.log(exFive(arrThree));

console.log("\n-------------------------------------------\n\n");

