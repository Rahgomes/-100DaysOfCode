Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const materias = ["php", "javascript", "node", "ruby", "html", "css"]

console.log("Usando forEach normal");
materias.forEach(function (materia, indice) {
    console.log(`${indice + 1}) ${materia}`);
})

console.log("-----------------------");

console.log("Usando um novo forEach");
materias.forEach2(function (materia, indice) {
    console.log(`${indice + 1}) ${materia}`);
})