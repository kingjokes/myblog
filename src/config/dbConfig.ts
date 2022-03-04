import {connect, model, Schema} from "mongoose";
import {BlogSchema} from "../interfaces/blogSchema"

const password= "hHeMUKq33FTSQXf3"
const db= "blog"


export class dbConfig {


    constructor() {

    }

   private static  createSchema(){
        return new Schema<BlogSchema>({
            title:{ type: String, required:true},
            content:{type: String, required:true},
            image:{type: String, required:true},
            author:{type: String, required:true},

        },
            {
                timestamps:true
            })
    }

    model(){
        return model<BlogSchema>('blogPosts', dbConfig.createSchema())
    }

     async connect():Promise<void>{
        try{
            await connect(`mongodb+srv://kingjokes:${password}@cluster0.ljkkl.mongodb.net/${db}?retryWrites=true&w=majority`).then(
                ()=>{
                    return console.log("db connected")
                },
                err=>{
                    return console.log(err)
                }
            )
        }catch (e){
            return console.log(e)
        }
    }

}

Object.seal(dbConfig)
