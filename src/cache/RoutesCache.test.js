import RoutesCache from "./RoutesCache";
import Route from "../entities/Route";
import TrackPoint from "../entities/TrackPoint";
import * as RouteHandler from "../parser/RouteHandler";

const mockGetRoutes = jest.spyOn(RouteHandler, "loadAllRoutes");

mockGetRoutes.mockImplementation(() => new Array());

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);

beforeEach(() => {
    RoutesCache.routes = []; //clear cache
    mockGetRoutes.mockClear();
});

test("Route added to cache", () => {
    RoutesCache.addRouteToCache(route1);
    expect(RoutesCache.routes.length).toEqual(1);
});

test("Two routes with same name added to cache", () => {
    RoutesCache.addRouteToCache(route1);
    RoutesCache.addRouteToCache(route1);
    expect(RoutesCache.routes.length).toEqual(1);
});

test("No routes when empty", () => {
    expect(RoutesCache.routes.length).toEqual(0);
});

test("Load routes from pod", () => {
    RoutesCache.getRoutes();
    expect(mockGetRoutes).toHaveBeenCalled();
});

test("Load routes from cache", () => {
    RoutesCache.addRouteToCache(route1);
    RoutesCache.getRoutes();
    expect(mockGetRoutes).toHaveBeenCalledTimes(0);
});

test("Clear cache", () => {
    RoutesCache.addRouteToCache(route1);
    expect(RoutesCache.routes.length).toEqual(1);
    RoutesCache.clear();
    expect(RoutesCache.routes.length).toEqual(0);
});