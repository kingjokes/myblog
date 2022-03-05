import {connect, model, Schema} from "mongoose";
import {BlogSchema} from "../interfaces/blogSchema"
import {BlogCategory} from "../interfaces/blogCategory";
require('dotenv').config()


const password= process.env.DBPASS
const db= process.env.DBTABLE
const username = process.env.DBUSERNAME


export class dbConfig {


    constructor() {

    }

    private static  createSchema(){
        return new Schema<BlogSchema>({
            title:{ type: String, required:true},
            content:{type: String, required:true},
            image:{type: String, required:true},
            author:{type: String, required:true},
            readTime:{type: String, required:true},
            tag:{type:String, required:true},
            hash:{type:[], required:true}

        },
            {
                timestamps:true
            })
    }

    private static categorySchema(){
        return new Schema({
            name:{type:String, required:true},

        },
            {
                timestamps:true
            })
    }


    model(){
        return model<BlogSchema>('blogPosts', dbConfig.createSchema())
    }

    categoryModel(){
        return model<BlogCategory>('blogCategory',dbConfig.categorySchema())
    }

     async connect():Promise<void>{
        try{

            await connect(`mongodb+srv://${username}:${password}@cluster0.ljkkl.mongodb.net/${db}?retryWrites=true&w=majority`).then(
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
