import express from 'express';
import routerGrades from './routes/grades.js';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;
const app = express();
app.use(express.json());
app.use('/grades', routerGrades);

global.fileName = 'grades.json';

app.listen(3000, async () => {
    try{
        await readFile(global.fileName)
    } catch(err){
        const initialJson = {
            nextId: 1,
            grades: []
        }
        await writeFile(global.fileName, JSON.parse(initialJson));
    }
})