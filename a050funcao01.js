// Função sem retorno
function imprime(a, b){
    console.log(a + b);
}
imprime(2,3);
imprime(2); // NaN
imprime(2,5,6,7,8,9,6); // 7
imprime(); // NaN

// Função com retorno
function soma(a, b){
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2)); // NaN
console.log(soma()); // NaN

