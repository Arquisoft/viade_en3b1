import ListUserRoutes from "./ListUserRoutes";
import RoutesCache from "../../cache/RoutesCache";
import Route from '../../entities/Route';
import TrackPoint from '../../entities/TrackPoint';

test('Define ListUserRoutes', () => {
    expect(ListUserRoutes).toBeDefined();
});

test('Renders correctly', () => {
    const wrapper = render(<ListUserRoutes />);
    expect(wrapper).toMatchSnapshot();
});

test('Mounts correctly', () => {
    var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);
    RoutesCache.addRouteToCache(route1);

    const wrapper = mount(<ListUserRoutes />);
});