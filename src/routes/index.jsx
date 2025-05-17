import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";


const routes = [...publicRoutes,...privateRoutes]

export default routes;