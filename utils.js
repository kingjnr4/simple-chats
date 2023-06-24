import { hash,verify } from "argon2";

export function hashpassword(str){
    return hash(str)
}

export function verifyPassword(str,hash){
    return verify(hash,str)
}