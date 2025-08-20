
import { envs } from "./config/envs";
import { Server } from "./presentation/server";

(()=>{
    main()
})();

function main () {
  console.log("Main function executed");

  const server = new Server({
    port:envs.PORT,
    public_path: envs.PUBLIC_PATH
  })

  server.star()
}