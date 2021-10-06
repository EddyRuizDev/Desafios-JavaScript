
let word = 'Hola mundo'
console.log(Array.from(word));
console.log(word.split('')); 



const letters = ['b', 'c', 'z', 'a']
let numbers = [1,8,100,300,3]
console.log(letters.sort())
console.log(numbers.sort())
console.log(numbers.sort((a,b)=>a-b))
function menorMayor(a, b) {
if (a-b < 0) return -1;
if (a-b > 0) return 1;
if(a == b) return 0;
}
function mayorMenor(a, b) {
if (b-a < 0) return -1;
if (b-a > 0) return 1;
if(b == a) return 0;
} 



 let number = [12, 25, 47, 84, 98];
numbers.forEach((number)=>console.log(number))
numbers.forEach((number, index) =>
    console.log(`${number} está en la posición ${index}`)) 

const words = ['HTML', 'CSS', 'JavaScript', 'PHP']
console.log(words.some(word => word.length>10));
console.log(words.every(word => word.length>3)); 



