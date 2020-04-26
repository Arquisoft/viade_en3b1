import { loadAllRoutes } from '../handler/RouteHandler';
import { loadMedia } from '../handler/MediaHandler';

export default {
    first: true,
    routes: [],
    addRouteToCache(route) {
        if (route && !this.routes.find((obj) => route.name === obj.name)) {
            this.routes.push(route);
        }
    },
    async getRoutes() {
        if (this.routes.length === 0 || this.first) {
            this.routes = await loadAllRoutes();
            this.first = false;
        }
        return this.routes;
    },
    async getRouteById(id) {
        if(this.routes.length === 0) {
            await this.getRoutes();
        }
        let selectedroute = this.routes.find((r) => r.getId() === id);
        if (selectedroute) {
            await selectedroute.calculateElevation();
            await new Promise((r) => setTimeout(r, 1000));
            return selectedroute;
        } else {
            return -1;
        }
        
        
    },
    clear() {
        this.routes = [];
        this.first = true;
    }
};