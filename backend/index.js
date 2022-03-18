import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000

//Connects to MongoDB Database
MongoClient.connect(process.env.INTERNTRACKER_DB_URL,
{
    poolSize: 5,
    wtimeout: 2500,
    useNewUrlParse: true

})
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await recipesDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening to port ${port}`)
    })
})