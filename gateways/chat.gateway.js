import { getSocket } from "../socket.js";

export function initChatGateway() {
  const namespace = getSocket().of("chats");
  namespace.on("connect", function (socket) {

    socket.on("disconnect", function () {
      console.log("disconnected");
    });
  });
}
