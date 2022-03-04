import {UserInterface} from "../interfaces/userInterface";
import {Request,Response} from "express";
import {dbConfig} from "../config/dbConfig"

const UserModel = new dbConfig().model()

export class userController implements UserInterface{

    async getBlog(request:Request, response:Response){
        try{

            await UserModel.find().sort({createdAt:-1}).then(result=>{
                return response.json({
                    status:true,
                    message:'reached',
                    content:result
                })
            })
        }catch (e){
            console.log(e)
            return response.json({
                status:false,
                message:'Query Failed'
            })
        }


    }

    blogDetails(request:object, response:object){

    }


}