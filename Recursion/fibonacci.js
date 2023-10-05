function getFibonacci(n)
{
 if (n < 2)
 {
    return n;
 }
 return getFibonacci(n-1) + getFibonacci(n-2);
}

console.log(getFibonacci(5)); 
console.log(getFibonacci(6));
console.log(getFibonacci(15));
console.log(getFibonacci(345));