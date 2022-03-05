import express, {Application} from 'express'
import {userRoute} from "./routes/userRoute";
import cors from "cors"
import bodyParser from "body-parser";
import {dbConfig} from "./config/dbConfig";


const app:Application = express()

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = new dbConfig()

app.use(new userRoute().routes)

app.use('/uploads',express.static(__dirname+'/uploads/'))

db.connect().then(response=>{
    app.listen(4000, 'localhost', ()=>{
        console.log("server running")
    })
})

