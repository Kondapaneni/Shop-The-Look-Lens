function divideArray(arr) {
    const result = [];
    

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        
        let nextNumber;
        if (i === arr.length - 1) {
 
            nextNumber = arr[0];
        } else {

            nextNumber = arr[i + 1];
        }
        if (nextNumber !== 0) {
            result.push(currentNumber / nextNumber);
        } else {
            result.push("Division by zero error");
        }
    }
    
    return result;
}

// Example array
const array = [9, 33, 0, 7, 2, 82, 77];

// Call the function and print the result
const result = divideArray(array);
console.log(result);
