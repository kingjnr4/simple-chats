import { findOne } from "../services/user.service.js";
import { getSocket } from "../socket.js";

export function initChatGateway() {
  const namespace = getSocket().of("chats");
  namespace.use(async (socket, next) => {
    const id = socket.handshake.headers.id;
    if (!id) {
      socket.disconnect(true);
      next(new Error("invalid credentials"));
    }
    const user = await findOne(+id);
    if (!user) {
      socket.disconnect(true);
      next(new Error("invalid credentials"));
    }
    socket.user = user;
    next();
  });
  namespace.on("connect", function (socket) {
    console.log(socket.user);
    socket.on("disconnect", function () {
      console.log("disconnected");
    });
  });
}
