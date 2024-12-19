function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result);

result = subtract(10, 5); // result is 5
console.log(result);

// Solution: Using function overloading correctly 
function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

result = addNumbers(5, 3);
console.log(result); // Output: 8

result = addStrings("5", "3");
console.log(result); // Output: 53

//Attempting to add a string and a number now results in a compile-time error
//result = addNumbers("5", 3); //This will throw an error in the compiler