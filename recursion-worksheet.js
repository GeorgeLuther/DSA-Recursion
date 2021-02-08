//1. Counting Sheep

// input = number
//output = message

function countingSheep(number){
    //base case
    if (number === 0) {
        return 'All sheep jumped over the fence'
    }
    console.log(`${number}: Another sheep jumps over the fence`)
    return  countingSheep(number - 1)
}

console.log(countingSheep(3))

//2. Power Calculator

//input: integer, exponent 
// base: 1
//output: integer^exponent
//condition: only if exponent >= 0


function powerCalculator(number, exponent){
    if (exponent < 0) {
        return 'exponent should be >= 0'
    }
    if (exponent === 1) {
        return number
    }
    else {
        return number * powerCalculator(number, exponent-1)
    }
    
}
console.log(powerCalculator(10, 2))

//3. Reverse String

// input: string
// base: all characters reversed
// output: reversed string

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"))


  //4. nth Triangular Number

  // input: number of dots on a side
  // base: 0 dots remaining
  // output: number of dots composing a triangle

  function nthTriangularNumber(n){
      if (n === 0) {
        return 0
      }
      return n + nthTriangularNumber(n-1)
  }
console.log(nthTriangularNumber(5))

  //5. String splitter
//make into an array
  //base: str = ''
  //input a string
  //output an array divided by , replacing a character
function splitter(str){
    if (str === '') {
        return ''
    }
    curr = str[0]
    curr = curr === '/' ? ',' : curr
    return curr + splitter(str.slice(1))
}
console.log(splitter('02/20/2020'))

// //6. Fibonacci
// input number of steps in sequence
// output is full fibonacci
// we need to subtract until we get to zero, adding current to previous and pushing to array?
function fibonacci(n){
    if (n <= 1) return 1
//sum of two preceding numbers
    
    return n%2 ? Math.ceil(n/2) : (n/2)+1
}
console.log(fibonacci(7))

//7. Factorial

//base n < 1
// input number
// output number multiplied by all nums ? >= 1
function factorial(n){
    if (n > 1) {
        return n * factorial(n-1)
    }
    return n

}
console.log(factorial(5))

//8. Way out of Maze

//input: path

// output: a string of characters representing a viable path out of a matrix
// L = left
// R = right
// D = down
// U = up

// try down (x + 1). if down doesn't work, try right. if right works + D

// if down doesn't work try right
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];


function exit(path){
    let position = [0,0]
    path.forEach(step => {
        if (step === 'L') home[0]--
        if (step === 'R') home[0]++
        if (step === 'U') home[1]--
        if (step === 'D') home[1]++
    })

}