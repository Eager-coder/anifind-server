import { Router } from "express"
import { animeRouter } from "./anime"
import authRouter from "./auth"
import { charactersRouter } from "./characters"
import { discussionsRouter } from "./discussions"
import { membersRouter } from "./members"
import profileRouter from "./profile"
const router = Router()

router.use("/auth", authRouter)
router.use("/profile", profileRouter)
router.use("/anime", animeRouter)
router.use("/characters", charactersRouter)
router.use("/members", membersRouter)
router.use("/discussions", discussionsRouter)
router.use("/*", (req, res) => res.status(404).json({ message: "Not found" }))

export default router
