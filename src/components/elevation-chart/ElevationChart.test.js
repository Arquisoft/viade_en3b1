import ElevationChart from './ElevationChart';
import TrackPoint from '../../entities/TrackPoint';

var point1 = new TrackPoint(1, 2, 3);
var point2 = new TrackPoint(2, 3, 4);
var points = [point1, point2];

test('Define ElevationChart', () => {
  expect(ElevationChart).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = shallow(<ElevationChart trackpoints={points} />);
  expect(wrapper).toMatchSnapshot();
});