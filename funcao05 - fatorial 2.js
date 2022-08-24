/*sabemos que o fatorial de 5  = 5 x 4 x 3 x 2 x 1 o que é o mesmo que 5 x 4! portanto:
n! = (n-1)!*/

function fatorial (n){
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))