import ev from './events.js';

ev.on('testeEvent', () => {
    console.log('teste 2');
});

ev.emit('testeEvent', 'bla bla bla')