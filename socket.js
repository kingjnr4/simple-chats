import {Server as WebSocketServer} from 'socket.io'
/** @type {WebSocketServer|null} */
let socket = null

export function bootstrapSockets(server){
    socket= new WebSocketServer(server)
} 

export function getSocket(){
    return socket
}

