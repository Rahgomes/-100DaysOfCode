import {EventEmitter} from "events";

const eventEmitter = new EventEmitter();

eventEmitter.on('testeEvent', obj => {
    console.log(obj);
})

export default eventEmitter;