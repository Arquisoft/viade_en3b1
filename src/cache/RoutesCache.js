import { loadAllRoutes } from '../parser/RouteHandler';

export default {
    routes: [],
    addRouteToCache(route) {
        if (route && !this.routes.find((obj) => route.name === obj.name)) {
            this.routes.push(route);
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
    }
};