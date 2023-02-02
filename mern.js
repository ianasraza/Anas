function add(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw ("Valid Argu");
    } else {
        return x + y;
    }

}

// console.log(add(5,6));
// console.log(add("5",6));
let x;
let y = 5;
try {
    console.log(add(x, y));
} catch (err) {
    console.log(err);
}
// Arrow Function

const divide = (x, y) => {
    return x / y;
}
let x1 = 5;
let y1 = 0;

try {
    console.log(divides(x, y));
} catch (e) {
    console.log(e);
}
// Arrays
const arr = [0, 7, 9];
console.log(...arr); // Spread Operator
let [num, num1] = arr;
console.log(num1);
arr.push(7);
console.log(arr.length);

for (let e in arr) {
    if (arr[e] === 6) {
        arr[e] += 2;
    }

}
console.log(...arr);

// Get Even Function
function getEven(arr) {
    if (arr && arr.length > 0) {
        arr.filter(function(x) {
            return x % 2 === 0;
        })

    }
    return {};
}
console.log(getEven(arr));

// Palendrom
function palendrom(input) {
    let rev = input.split("").reverse().join("");
    return rev === input;

}
console.log(palendrom("22222222"));



//counting
let array = [11, 22, 13, 34, 5, 6]

let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

console.log(countingSort(array, 6, 34))