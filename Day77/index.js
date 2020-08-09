import express from 'express';
import winston from 'winston';
import cors from 'cors';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';

const { writeFile, readFile } = fs;
global.fileName = 'accounts.json';
const { combine, timestamp, printf, label } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
})
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'my-bank-api.log' })
    ],
    format: combine(
        label({ label: 'my-bank-api' }),
        timestamp(),
        myFormat
    )
})

const app = express();
app.use(express.json());
//Cors de forma global
app.use(cors());
app.use(express.static('public'));

app.use('/account', accountsRouter);

app.listen(3000, async () => {
    try {
        await readFile(global.fileName);
        logger.info('API started!');
    } catch (err) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            global.logger.info('API started and File created!');
        }).catch(err => {
            global.logger.error(err);
        })
    }
})