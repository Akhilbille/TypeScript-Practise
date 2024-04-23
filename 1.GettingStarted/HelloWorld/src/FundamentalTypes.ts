// Basic Types 
let num:number = 12; // Explicit way 
 
// Arrays
let numbers: number[] = [1,2,3,4,5,6];
numbers.forEach(n => console.log(n));

//Tuples
let user:[number, string] = [1,'A'];

// Enum
 enum Size{Small=1,Medium,Large};
 let mySize:Size = Size.Medium;
 console.log()

 //function 
 function calculateTax(income:number , taxYear=2022):number{
    return 1; 
 }
 

 //Objects

 let employee:{
    readonly id : number,
    name : string
 } = {
    id : 1,
    name : 'akhil'
 }



// Any type

let number;
number = '1';
number = 1;


