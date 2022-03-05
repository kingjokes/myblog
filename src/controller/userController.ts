import {UserInterface} from "../interfaces/userInterface";
import {Request,Response} from "express";
import {dbConfig} from "../config/dbConfig"


const UserModel = new dbConfig().model()

const blogCategory = new dbConfig().categoryModel()

export class userController implements UserInterface{

    async getBlog(request:Request, response:Response){
        try{

            await UserModel.find().sort({createdAt:-1}).then(result=>{
                return response.json({
                    status:true,
                    message:'query successful',
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

    async blogDetails(request:Request, response:Response){

        try{
            await UserModel.findById(request.params.id).then(result=>{
                return response.json({
                    status:true,
                    message:'query successful',
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


    async blogCategories(request:Request, response:Response){
        try{

            await blogCategory.find().sort({createdAt:-1}).then(result=>{
                return response.json({
                    status:true,
                    message:'query successful',
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


}