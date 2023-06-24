import { db } from "../database/database.js";
import { hashpassword, verifyPassword } from "../utils.js";

export const register = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("fill all fields");
  }
  const existingUser = await db.user.findFirst({
    where: {
      username,
    },
  });
  if(existingUser){
    return res.status(400).send("credentials in use");
  }
  const user = await db.user.create({
    data:{
        username,
        password:await hashpassword(password)
    },
    select:{
        username:true,
        password:true,
        created_at:true,
        updated_at:true
    }
  })
  return res.status(201).send(user)
};

export const login = async (req,res,next)=>{
     const { username, password } = req.body;
     if (!username || !password) {
       return res.status(400).send("fill all fields");
     }
     const user = await db.user.findFirst({
       where: {
         username,
       },
     });
     if (!user) {
       return res.status(400).send("invalid credentials");
     }
     const passIsValid = await verifyPassword(password,user.password)
     if(!passIsValid) {
        return res.status(400).send("invalid credentials");
     }
     const { password:dbpass, ...rest } = user;
     return res.send(rest)
}

export const findOne=async(id)=>{
  const user = db.user.findFirst({
    where:{
      id
    }
  })
return user
}