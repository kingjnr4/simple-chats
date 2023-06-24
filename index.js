import express from "express";
import { createServer } from "http";
import { bootstrapSockets } from "./socket.js";

export function bootstrap() {
  try {
    const PORT = 3000;
    const app = express();
    const server = createServer(app);
    app.use(express.json())
    server.listen(PORT, () =>
      console.log(`Server up on http://localhost:${PORT}`)
    );
    bootstrapSockets(server);

    return app
  } catch (e) {
    console.log(e);
    process.exit("1");
  }
}

