import MapSnapshot from "./MapSnapshot";
import Route from "../../entities/Route";
import TrackPoint from "../../entities/TrackPoint";

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);

test("Define MapSnapshot", () => {
    expect(MapSnapshot).toBeDefined();
});

test("Renders correct", () => {
    const wrapper = render(<MapSnapshot route={route1}/>);
    expect(wrapper).toMatchSnapshot();
});