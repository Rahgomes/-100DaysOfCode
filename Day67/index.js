import { promises as fs } from 'fs';

async function init() {
    try {
        await fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla 4');
        await fs.appendFile('modulo node/modulo 1/modulo-file-system/teste.txt', '\n append async/await');
        const data = await fs.readFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

async function writeReadJson(){
    try{
        const arrayCarros = ['kaddet', 'gol', 'monza'];
        const objCarros = {carro: arrayCarros};

        await fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.json',  JSON.stringify(objCarros));
        const data = JSON.parse(await fs.readFile('modulo node/modulo 1/modulo-file-system/teste.json'));
        data.carro.push('kombi');
        await fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.json', JSON.stringify(data));
    } catch(err){
        console.log(err);
    }
}

init();
writeReadJson();

    // fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla 3').then(() => {
    //     fs.appendFile('modulo node/modulo 1/modulo-file-system/teste.txt', '\n append com promises').then(() => {
    //         fs.readFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8').then(data => {
    //             console.log(data);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }).catch(err => {
    //     console.log(err);
    // })

    // import fs from 'fs';
    //Utilizando forma assíncrona com Callbacks
    // fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla', err => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         fs.appendFile('modulo node/modulo 1/modulo-file-system/teste.txt', '\n texto concatenado com o append file', err => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 fs.readFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8', (err, data) => {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                         console.log(data);
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })
    //Utilizando de forma síncrona
    // try {
    //     console.log(1);
    //     fs.writeFileSync('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla sync');
    //     console.log(2);
    //     const fsRead = fs.readFileSync('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8');
    //     console.log(fsRead);
    //     console.log(3);
    // } catch(err){
    //     console.log(err);
    // }

// fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla 3').then(() => {
//     fs.appendFile('modulo node/modulo 1/modulo-file-system/teste.txt', '\n append com promises').then(() => {
//         fs.readFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8').then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(err);
//         })
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })


// import fs from 'fs';
//Utilizando forma assíncrona com Callbacks
// fs.writeFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla', err => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.appendFile('modulo node/modulo 1/modulo-file-system/teste.txt', '\n texto concatenado com o append file', err => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.readFile('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8', (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 })
//             }
//         })
//     }
// })

//Utilizando de forma síncrona
// try {
//     console.log(1);
//     fs.writeFileSync('modulo node/modulo 1/modulo-file-system/teste.txt', 'bla bla bla sync');
//     console.log(2);
//     const fsRead = fs.readFileSync('modulo node/modulo 1/modulo-file-system/teste.txt', 'utf-8');
//     console.log(fsRead);
//     console.log(3);
// } catch(err){
//     console.log(err);
// }