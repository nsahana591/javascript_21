//7/*write a program to print the greatest number in given two numbers in javascript*///
var x = 35;
var y = 35;
let largest;
if (x > y){
    largest=x;
}
 else {
    largest=y;
}
console.log("the greatest number in given two numbers is "+largest );

//8/*write a program to print the least number is given two numbers*///
var x=35;
var y=45;
let least;
if(x<=y){
    least=x;
}
else{
    least=y;
}
console.log(" the least number is given two numbers is"+least);

//9/*write a program to print the greatest number in given three numbers in javascript*///
// take input from the user
 var x =400;
var  y=50;
var z= 60;
let greatest;
// check the condition
if(x >= y && x >= z) {
    greatest= x;
}
else if (y >= x && y >= z) {
    greatest = y;
}
else {
    greatest= z;
}
// display the result
console.log("The greatest number in given three numbers is " + greatest);
