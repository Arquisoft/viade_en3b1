import ImportRouteForm from './ImportRouteForm';
import { Router } from 'react-router';
import { getByTestId, fireEvent, render } from '@testing-library/react';
import RouteJSON from '../../../test-assets/RouteJSON.json';
import RouteGPX from '../../../test-assets/RouteGPX.gpx';
import Route from '../../../entities/Route';
import TrackPoint from '../../../entities/TrackPoint';

var file = new File(["foo"], "foo.txt", {
    type: "text/plain",
});

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null, "ID1");

test('Define ImportRouteForm', () => {
    expect(ImportRouteForm).toBeDefined();
});

test('Renders correctly', () => {
    const wrapper = render(<ImportRouteForm location={{ routes: [file] }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Renders correctly: No files', () => {
    const wrapper = render(<ImportRouteForm location={{ routes: [] }} />);
    expect(wrapper).toMatchSnapshot();
});

test('Mounts correctly', () => {
    const wrapper = mount(<ImportRouteForm location={{ routes: [file] }} />);
    expect(wrapper).toBeTruthy();

    const wrapper2 = mount(<ImportRouteForm location={{ routes: [] }} />);
    expect(wrapper2).toBeTruthy();
});

test("Click", () => {
    const { container } = render(<ImportRouteForm location={{ routes: [file] }} />);

    const button = getByTestId(container, 'btn-test-accept');
    fireEvent.click(button);
});

test('Methods', () => {
    const wrapper = shallow(<ImportRouteForm location={{ routes: [file] }} />);
    const instance = wrapper.shallow().instance();

    instance.handleFiles();
    // instance.handleGPX(RouteGPX);
    // instance.handleJSON(RouteJSON);
});