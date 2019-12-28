class IPhone {
    constructor(model, color, system) {
        this.model = model,
            this.color = color,
            this.system = system
    }

    descPhone() {
        console.log(`My model of IPhone is ${this.model}, the color is ${this.color} and system is ${this.system}`)
    }
    methodCalled() {
        console.log(`I called it by Class of JavaScript!!!`)
    }
}

const iphone = new IPhone("XR", "White", "IOS 13")
iphone.descPhone()
iphone.methodCalled()
console.log("------------------------------------------")

const android = (model, color, system) => {
    return {
        model,
        color,
        system,
        descPhone() {
            console.log(`My model of Android is ${this.model}, the color is ${this.color} and system is ${this.system}`)
        },
        methodCalled() {
            console.log(`I called it by function factory of JavaScript!!!`)
        }
    }
}

const androidPhone = android("Samsung s10", "Black", "12.1")
androidPhone.descPhone()
androidPhone.methodCalled()
console.log("------------------------------------------")

function Xiomi(model, color, system) {
    this.model = model,
        this.color = color,
        this.system = system

    this.descPhone = () => console.log(`My model of XIOMI is ${this.model}, the color is ${this.color} and system is ${this.system}`)
    this.methodCalled = () => console.log(`I called it by contruct function of JavaScript!!!`)
}

const xiomi = new Xiomi("Mi", "White", "9")
xiomi.descPhone()
xiomi.methodCalled()
