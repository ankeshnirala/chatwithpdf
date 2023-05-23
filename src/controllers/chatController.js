import multer from "multer"
import pdfjs from "pdfjs-dist"

import { BadRequestError } from "../errors/badRequest.js"

const FileUplaod = multer({
    storage: multer.memoryStorage()
}).single("file");

const ChatController = (req, res) => {
    FileUplaod(req, res, async err => {
        if(err) throw new BadRequestError(err)

        if(!req.file) throw new BadRequestError("please select file")

        let pdfDoc = pdfjs.getDocument(req.file.originalname)
        // let pdfText = await pdfDoc.getTextContent()
        console.log(pdfDoc);
        res.status(200).send({})
    })
}

export { ChatController }