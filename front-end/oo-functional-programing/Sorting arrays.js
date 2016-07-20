var array = [1, 12, 21, 2];

// transforma em strings e ordena
console.log(array.sort());

// recebe uma função de comparação e ordena do maior para o menor
console.log(array.sort(function(a,b){
    return b - a;
}))