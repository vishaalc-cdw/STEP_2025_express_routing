import express from 'express';
import { fileController } from '../controllers/file.controller.js';

const filesRouter = express.Router()
filesRouter.use(express.urlencoded({ extended: true }))
filesRouter.use(express.json())

filesRouter.get('/:id', fileController.readOneFile);
filesRouter.post('/', fileController.writeToFile);
filesRouter.put('/', fileController.updateFile);
filesRouter.delete('/', fileController.deleteFile);

export { filesRouter };