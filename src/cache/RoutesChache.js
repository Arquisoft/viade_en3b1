import { loadAllRoutes } from '../parser/RouteHandler';

export default {
    routes: [],
    selected: "",
    addRouteToCache(route) {
        if(route && !this.routes.find((obj) => route.name === obj.name)) {
            this.routes.push(route);
            // console.log("ROUTE ADDED TO CACHE");
        } else {
            alert("ERROR TRYING TO ADDROUTE TO CACHE");
        }
    }, 
    async getRoutesFromPod() {
        if (this.routes.length === 0) {
            this.routes = await loadAllRoutes();
            // console.log("ROUTES FROM POD (CACHE)");
            // console.log(this.routes);
        }
        return this.routes;
    },
    getRoutesFromCache() {
        // console.log("ROUTES FROM CACHE");
        // console.log(this.routes);
        return this.routes;
    },
    clear() {
        this.routes = [];
        this.selected = null;
    }
};