import express from "express";
import { createServer } from "http";
import { bootstrapSockets } from "./socket.js";

export function bootstrap() {
  try {
    const PORT = 3000;
    const app = express();
    const server = createServer(app);
    server.listen(PORT, () =>
      console.log(`Server up on http://localhost:${PORT}`)
    );
    bootstrapSockets(server);
  } catch (e) {
    console.log(e);
    process.exit("1");
  }
}

