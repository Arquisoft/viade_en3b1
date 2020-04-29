import * as RouteHandler from "./RouteHandler";
import Route from "../entities/Route";
import TrackPoint from "../entities/TrackPoint";

const mockLoadAllRoutes = jest.spyOn(RouteHandler, "loadAllRoutes");
const mockUploadRoute = jest.spyOn(RouteHandler, "uploadRoute");

mockLoadAllRoutes.mockImplementation(() => new Array());
mockUploadRoute.mockImplementation((route, callback) => {
    if(route instanceof Route) {
        return 0;
    } else {
        // error.
        return -1;
    }
});

test("LoadAllRoutes", () => {
    let routes = RouteHandler.loadAllRoutes();
    expect(routes).toEqual([]);
});

test("UploadRoute Fail", () => {
    let routes = RouteHandler.uploadRoute("route");
    expect(routes).toEqual(-1);
});

test("UploadRoute Correct", () => {
    let r = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);
    let routes = RouteHandler.uploadRoute(r);
    expect(routes).toEqual(0);
});