import "reflect-metadata";
import { errors } from "celebrate";

import { server } from "./app";
import { globalError } from "./middlewares/globalError";

server.use(errors());
server.use(globalError);

server.listen(process.env.PORT || 3333, () => {
  console.log("Server is Running");
});
