import  usercontroller  from "./contollers/user.controller.js";
import { connectToDB, disconnectFromDb } from "./database/database.js";
import { initChatGateway } from "./gateways/chat.gateway.js";
import { bootstrap } from "./index.js";

const gateways = [initChatGateway];
const routers = [
  {
    path: "users",
    controller: usercontroller,
  },
];

function startApp() {
  const app = bootstrap();
  connectToDB();
  initRouters(app);
  gateways.forEach((gatewayInitFn) => gatewayInitFn());
  process.on("beforeExit", () => disconnectFromDb());
}

function initRouters(app) {
  routers.forEach((router) => {
    app.use(`/api/v1/${router.path}`,router.controller);
  });
}
startApp();
