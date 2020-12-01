import { createServer } from "./server"

(async() => {
  const server = await createServer();
  server.listen(3000).then((url) => {
    console.log(`🚀  Server ready at ${url}`);
  })
})()