
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

// rewriting the sum function with tail recursion which is more efficient

function sumB(arr, index =0, sum =0){
    if(arr.length === index) {
            // Base case: reached the end of the array
    return sum;
    } else {
        return sumB(arr, index + 1, sum + arr[index])
    }
}

/* In practical terms, for large arrays or deeply nested recursive calls,
 it's generally advisable to use iterative solutions or other techniques
  to avoid potential stack overflow errors in JavaScript.*/
function maxNumberOfArray(arr, index = 0) {
    if (arr.length === index + 1) {
        return arr[index];
    }
    else {
        if (arr[index] > arr[index + 1]) {
            return arr[index]
        } else {
            return maxNumberOfArray(arr, index + 1)
        }
    }
}

