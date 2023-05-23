import { Router } from "express"

import { ChatController } from "../controllers/chatController.js"

const router = Router()

router.route("/chatWithPDF").post(ChatController)

export { router as chatRouter }