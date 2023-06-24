import { Router } from "express";
import { login, register } from "../services/user.service.js";

 const usercontroller = Router();
usercontroller.post("/register", (req, res, next) => register(req, res, next));
usercontroller.post("/login",(req,res,next)=>login(req,res,next))

export default usercontroller
