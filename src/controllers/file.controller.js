import { fileService } from "../services/file.service.js";
import { sendResponse } from "../utils/response.utils.js";
import { STATUS_CODE, STATUS_MESSAGES } from "../constants/response.constant.js";

const readOneFile = async (request, response) => {
    const fileContent = await fileService.readOneFile(`files/${request.params.id}.txt`);
    fileContent.length != 0
      ? sendResponse(response, fileContent, STATUS_MESSAGES.SUCCESS, STATUS_CODE.OK)
      : sendResponse(response, '', STATUS_MESSAGES.NOT_FOUND, STATUS_CODE.NOT_FOUND)
}

const writeToFile = async (request, response) => {
    const contentToBeWritten = request.body.content;
    const fileName = request.body.fileName;
    await fileService.writeToFile(contentToBeWritten, fileName);
    sendResponse(response, '', STATUS_MESSAGES.SUCCESS, STATUS_CODE.OK)
}

const updateFile = async (request, response) => {
    const contentToBeAppended = request.body.content;
    const fileName = request.body.fileName;
    await fileService.updateFile(contentToBeAppended, fileName);
    sendResponse(response, '', STATUS_MESSAGES.SUCCESS, STATUS_CODE.OK)
}

const deleteFile = async (request, response) => {
    await fileService.deleteFile(request.body.fileName);
    sendResponse(response, '', STATUS_MESSAGES.SUCCESS, STATUS_CODE.OK)
}

export const fileController = {
    readOneFile,
    writeToFile,
    updateFile,
    deleteFile
}