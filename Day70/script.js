const arrayCidades = ['São Paulo', 'Rio de Janeiro', 'Coritiba', 'Santa Catarina', 'Ceará'];
console.log(arrayCidades);
arrayCidades.sort();
console.log(arrayCidades);
arrayCidades.sort().reverse();
console.log(arrayCidades);
arrayCidades.sort((a, b) => {return b - a});
console.log(arrayCidades);
arrayCidades.sort((a, b) => {return a - b});
console.log(arrayCidades);
arrayCidades.sort((a, b) => a.length - b.length);
console.log(arrayCidades);
arrayCidades.sort((a, b) => b.length - a.length);
console.log(arrayCidades);

const arrayNumeros = [1, 8, 10, 12, 19, 5, 3, 20, 16, 9];
console.log(arrayNumeros);
arrayNumeros.sort()
console.log(arrayNumeros);
arrayNumeros.sort((a, b) => a - b);
console.log(arrayNumeros);
arrayNumeros.sort((a, b) => b - a);
console.log(arrayNumeros);
arrayNumeros.sort().reverse()
console.log(arrayNumeros);