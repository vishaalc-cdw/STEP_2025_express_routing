import * as fs from 'fs/promises';

const readOneFile = async (fileName) => {
    const fileText = await fs.readFile(fileName, 'utf-8');
    return fileText;
}

const writeToFile = async (text, fileName) => {
    await fs.writeFile(fileName, text);
}

const updateFile = async (text, fileName) => {
    await fs.appendFile(fileName, text);
}

const deleteFile = async (fileName) => {
    await fs.unlink(fileName);
}

export const fileService = { readOneFile, writeToFile, updateFile, deleteFile };