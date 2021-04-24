import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(4747, () => console.log("server is running on port 4747"));