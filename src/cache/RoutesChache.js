import { loadAllRoutes } from '../parser/RouteHandler';

export default {
    routes: [],
    addRouteToCache(route) {
        if (route && !this.routes.find((obj) => route.name === obj.name)) {
            this.routes.push(route);
            // console.log("ROUTE ADDED TO CACHE");
        } else {
            alert("ERROR TRYING TO ADDROUTE TO CACHE");
        }
    },
    async getRoutes() {
        if (this.routes.length === 0) {
            this.routes = await loadAllRoutes();
        }
        return this.routes;
    },
    clear() {
        this.routes = [];
        this.selected = null;
    }
};