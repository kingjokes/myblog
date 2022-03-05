import {Response, Request} from "express";

export interface UserInterface{

    getBlog:(req:Request,res:Response)=>void,

    blogDetails:(req:Request,res:Response)=>void,

    blogCategories:(req:Request,res:Response)=>void





}