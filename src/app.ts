import express from "express"
import { config } from "dotenv"
import router from "./routes"
import { apiError } from "./middlewares/api-error"
import cors from "cors"
import cookieParser from "cookie-parser"
config()

const app = express()
const PORT = process.env.PORT || 80
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(cookieParser())
app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ limit: "5mb", extended: true }))

app.use("/api", router)
app.use(apiError)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
