
// Tail recursion 
function factorial(n, acc = 1) {
    if (n === 0) {
        return acc;
    }
    console.log(n)
    return factorial(n - 1, acc * n);
}
console.log(factorial(5))

// D&C using recurion to sum all array elements

function sum(arr, index = 0) {
    if (arr.length - 1 === index) return arr[index];
    else {
        return arr[index] + sum(arr, index + 1)
    }
}
const arr = [2, 4, 6]
console.log(sum(arr))
