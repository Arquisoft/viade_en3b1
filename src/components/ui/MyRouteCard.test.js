import MyRouteCard from './MyRouteCard';
import Route from '../../entities/Route';
import TrackPoint from '../../entities/TrackPoint';

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null, "ID1");

test('Define MyRouteCard', () => {
  expect(MyRouteCard).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<MyRouteCard route={route1} />);
  expect(wrapper).toMatchSnapshot();
});