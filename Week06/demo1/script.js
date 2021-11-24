let quantity = 3;
let price = 1.5;
let totalCost = quantity * price;
console.log("Quantity = " + quantity);
console.log(`Quantity = ${quantity}`);
console.log("Price = " + price);
console.log("Total Cost = " + totalCost);
console.log(`Total Cost = ${quantity * price}`);
quantity = "a string";
console.log(quantity);
let flag = true;
console.log(flag);
let myArray = [1, 1.5, "abc"];
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

myArray.pop();
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

myArray.push("anything");
console.log(myArray.length);
console.log(myArray[myArray.length]);

function fun1(m, n) {
  for (let i = m; i < n; i++) {
    console.log(i);
  }
}
fun1(2, 8);
fun1(101, 105);

function fun2(m, n) {
  return m + n;
}
console.log("result=" + fun2(10, 20));
