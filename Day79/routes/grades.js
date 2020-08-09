import express from 'express';
import { promises as fs } from 'fs';
const router = express.Router();
const { readFile, writeFile } = fs;

router.post('/', async (req, res) => {
    try {
        let grade = req.body;

        if (!grade.student || !grade.subject || !grade.type || grade.value == null || !grade.timestamp) {
            throw new Error('Todos os campos são obrigatórios!');
        }

        const data = JSON.parse(await readFile(global.fileName));
        grade = {
            id: data.nextId++,
            student: grade.student,
            subject: grade.subject,
            type: grade.type,
            value: grade.value,
            timestamp: new Date()
        }
        data.grades.push(grade);

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.put('/', async (req, res) => {
    try {
        let grade = req.body;

        const data = JSON.parse(await readFile(global.fileName));
        const index = data.grades.findIndex(indice => indice.id === grade.id);

        data.grades[index].student = grade.student;
        data.grades[index].subject = grade.subject;
        data.grades[index].type = grade.type;
        data.grades[index].value = grade.value;
        data.grades[index].timestamp = grade.timestamp;

        await writeFile(global.fileName, JSON.stringify(data, null, 2));

        res.send(grade);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        data.grades = data.grades.filter(grade => grade.id !== parseInt(req.params.id));
        await writeFile(global.fileName, JSON.stringify(data, null, 2));
        res.send(`O usuário cujo id era ${req.params.id} foi deletado com sucesso!`);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        const grade = data.grades.find(grade => grade.id === parseInt(req.params.id));
        res.send(grade);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.get('/totalNotes/:student/:subject', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        const findStudent = data.grades.filter(foundStudent => foundStudent.student === req.params.student
            && foundStudent.subject === req.params.subject);

        const totalNote = findStudent.reduce((accumulator, current) => {
            return accumulator + current.value;
        }, 0)
        res.send(`O valor total da nota do aluno ${req.params.student} é ${totalNote}.`);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.get('/media/:subject/:type', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        const findMedia = data.grades.filter(foundMedia => foundMedia.subject === req.params.subject &&
            foundMedia.type === req.params.type);

        const media = findMedia.reduce((accumulator, current) => {
            return accumulator + current.value / (findMedia.length);
        }, 0);
        res.send(`A média da matéria ${req.params.subject} e tipo de tarefa ${req.params.type} é ${media}`);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.get('/top3/:subject/:type', async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName));
        const findTop3 = data.grades.filter(foundTop3 => foundTop3.subject === req.params.subject &&
            foundTop3.type === req.params.type);
        const top3 = findTop3.sort((a, b) => b.value - a.value).slice(0, 3);
        res.send(top3);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

export default router;