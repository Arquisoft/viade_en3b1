import ImportRouteCard from './ImportRouteCard';
import Route from '../../entities/Route';
import TrackPoint from '../../entities/TrackPoint';
import { render, fireEvent, getByTestId } from '@testing-library/react';

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null, "ID1");

test('Define ImportRouteCard', () => {
  expect(ImportRouteCard).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<ImportRouteCard route={route1} />);
  expect(wrapper).toMatchSnapshot();
});

test('Click on expand', () => {
    const { container } = render(<ImportRouteCard route={route1}/>);

    const button = getByTestId(container, 'btn-expand-test');
    fireEvent.click(button);
});