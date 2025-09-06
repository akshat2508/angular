let lname: string;
lname = 'Akshat';
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25;
let newage = age.toLocaleString();
console.log(newage);
console.log(typeof newage);
// lname = 10;

let isValid: boolean;
isValid = true;

console.log(isValid);

let emptList: string[];
//also
let numberlist: Array<number>;

numberlist = [1, 2, 3, 4, 5, 6];
let result = numberlist.filter((num) => num > 2);
console.log(result);


let sum  = numberlist.reduce((acc  , num) => acc +num);
console.log(sum);


const enum Color
{
    Red,
    Blue,
    Green
}

let c : Color = Color.Blue;
console.log(c);


let swap_num : [firstNumber: number, secondNumber: number];
function swap_number(num1: number, num2: number): [number , number]
{
    return [num2,num1];
}
swap_num = swap_number(10,20);
console.log(swap_num);
