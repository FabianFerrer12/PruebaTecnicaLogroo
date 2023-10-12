import app from "./app.js";
import { startConnection } from "./database.js";

async function main() {
  startConnection();
  await app.listen(app.get("port"));
}

main();
