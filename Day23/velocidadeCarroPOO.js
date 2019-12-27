function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

let kaddet = new Carro(200, 10)
kaddet.acelerar()
console.log("Velocidade Atual Kaddet: " + kaddet.getVelocidadeAtual())

let BMW = new Carro(350, 50)
BMW.acelerar()
BMW.acelerar()
BMW.acelerar()
console.log("Velocidade Atual BMW: " + BMW.getVelocidadeAtual())