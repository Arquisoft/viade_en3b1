import Route from "../../entities/Route";
import TrackPoint from "../../entities/TrackPoint";
import DetailsMap from "./DetailsMap";

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);

test("Define DetailsMap", () => {
    expect(DetailsMap).toBeDefined();
});

test("Renders correct", () => {
    const wrapper = render(<DetailsMap route={route1}/>);
    expect(wrapper).toMatchSnapshot();
});