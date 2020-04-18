import RouteDetails from "./RouteDetails";
import Route from '../../../entities/Route';
import TrackPoint from '../../../entities/TrackPoint';
import RoutesCache from "../../../cache/RoutesCache";

test("Define RouteDetails", () => {
    expect(RouteDetails).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<RouteDetails  match={{params: {id: 1}}} />);
    expect(wrapper).toMatchSnapshot();
});

test('Mounts correctly', () => {
    var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null, "ID1");
    RoutesCache.addRouteToCache(route1);

    mount(<RouteDetails  match={{params: {id: 1}}} />);
});