import express from 'express';
import dotenv from 'dotenv';
import { filesRouter } from './src/routes/files.js';
dotenv.config();

const app = express();

app.use('/file', filesRouter);

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on ${process.env.PORT}`)
});