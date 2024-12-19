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

//This is the problematic part where type safety is lost
result = add("5", 3); //No error from the compiler but gives NaN
console.log(result);