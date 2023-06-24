import { initChatGateway } from "./gateways/chat.gateway.js";
import { bootstrap } from "./index.js";

const gateways = [initChatGateway];

function startApp() {
  bootstrap();
  gateways.forEach((gatewayInitFn)=>gatewayInitFn())
}
 startApp()