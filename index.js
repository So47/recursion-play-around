
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

// function to count numbers in a list
function count(arr, index = 0) {
    if (arr.length === index) {
        return 0;
    }
    else {
        return 1 + count(arr, index + 1)
    }
}

/* In practical terms, for large arrays or deeply nested recursive calls,
 it's generally advisable to use iterative solutions or other techniques
  to avoid potential stack overflow errors in JavaScript.
   This function below has memory consumption O(n) which is huge. 
   If we used an iterative solution it will be just O(1).
   However, the time consumption for both of them is the same.
  */
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


// binary search with recursion; the base case will be an array with one item.
/*
The memory and the time complexity are O(log n) due to the recursive function calls that create new stack frames. 
on the other hand for using a while loop as an iterative solution the time complexity will be O(log n) but the memory consumption will be O(1).

In the iterative binary search implementation, the memory usage remains constant regardless of the size of the input array.
The algorithm only requires a fixed amount of memory to store variables 
*/
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Base case: target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Recursive call for the left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Recursive call for the right half
  }
}

