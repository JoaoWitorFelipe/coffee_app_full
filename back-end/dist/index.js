"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
(async () => {
    const server = await server_1.createServer();
    server.listen(3000).then((url) => {
        console.log(`🚀  Server ready at ${url}`);
    });
})();
