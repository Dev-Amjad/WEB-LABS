function myFunction(arr, func) {
    
    let result = arr.filter(func);
    return result;
}

let numbers = [1,2,3,4,5];
let doubledNumbers = myFunction(numbers, (x) => x%2==0);
console.log(doubledNumbers);


