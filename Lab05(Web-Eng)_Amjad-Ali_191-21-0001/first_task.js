function reverseArray(arr) {
    // Create a new array to store the reversed elements
    var reversedArray = [];
    
    // Iterate over the input array in reverse order and push each element to the new array
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    
    return reversedArray;
}

// Example usage:
var inputArray = [1, 2, 3];
var reversedArray = reverseArray(inputArray);
console.log(reversedArray); // Output: [3, 2, 1]