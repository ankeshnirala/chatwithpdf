import { config } from "dotenv"

config({path: ".env"})

const start = async () => {
    // process.on("uncaughtException", error => {
    //     console.log("UNCAUGHT EXCEPTION - SHUTTING DOWN...")
    //     console.log(error.name, error.message)
    //     process.exit(1)
    // })
    
    const port = process.env.PORT
    
    if(!port) {
        throw new Error("PORT not found")
    }
    
    const { app } = await import("./src/app.js")
    let server = app.listen(port)
    console.log(`App is running on port: ${port}`)

    process.on("unhandledRejection", error => {
        console.log("UNHANDLED REJECTION - SHUTTING DOWN...")
        console.log(error.name, error.message)
        server.close(() => process.exit(1))
    })
}

start()