
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(()=>{
    main()
})();

function main () {
  console.log("Main function executed");

  const server = new Server({
    port:envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.Routes
  })

  server.star()
}