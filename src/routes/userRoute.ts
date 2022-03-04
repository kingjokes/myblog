import express, {Router,Response,Request} from "express"
import {userController} from "../controller/userController";


const router:Router = express.Router()


 export  class userRoute {
    private userController: userController

    constructor() {
        this.userController = new userController()
    }

    get routes() {
        router.get('/blogs', this.userController.getBlog)
        router.get('/blog/:id',this.userController.blogDetails)

        return router
    }

}


Object.seal(userRoute)

