import EditableMap from "./EditableMap";
import { fireEvent, render, getByTestId } from "@testing-library/react";
import { Map } from "react-leaflet";

const mockOpenNotif = jest.fn();
mockOpenNotif.mockImplementation((text) => {
    return text;
});

test("Define EditableMap", () => {
    expect(EditableMap).toBeDefined();
});

test("Renders correct", () => {
    const wrapper = render(<EditableMap />);
    expect(wrapper).toMatchSnapshot();
});

test("Empty Map", () => {
    const wrapper = mount(<EditableMap />);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
});

test("Click", () => {
    const wrapper = mount(<EditableMap />);
    const map = wrapper.find({id:"test-map-leaflet"}).first();
    map.simulate("click");
});

test("Add point", () => {
    const wrapper = mount(<EditableMap openNotif={mockOpenNotif} />);

    var latlng = L.latLng(50.5, 30.5);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
    
    wrapper.instance().addPoint(latlng);

    expect(wrapper.instance().getTrackPoints().length).toEqual(1);
});

test("Remove point", () => {
    const wrapper = mount(<EditableMap openNotif={mockOpenNotif} />);

    var latlng = L.latLng(50.5, 30.5);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
    
    wrapper.instance().addPoint(latlng);
    expect(wrapper.instance().getTrackPoints().length).toEqual(1);

    wrapper.instance().removePointById(0);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
});

test("Update point", () => {
    const wrapper = mount(<EditableMap openNotif={mockOpenNotif} />);

    var latlng = L.latLng(1, 2);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
    
    wrapper.instance().addPoint(latlng);
    expect(wrapper.instance().getTrackPoints().length).toEqual(1);

    var latlngNew = L.latLng(50, 50);
    wrapper.instance().updatePointById(0, latlngNew);
    expect(wrapper.instance().getTrackPoints().length).toEqual(1);
    expect(wrapper.instance().getTrackPoints()).toEqual([latlngNew]);
});

test("Remove point with click", () => {
    const wrapper = mount(<EditableMap openNotif={mockOpenNotif} />);

    var latlng = L.latLng(50.5, 30.5);
    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
    
    wrapper.instance().addPoint(latlng);
    expect(wrapper.instance().getTrackPoints().length).toEqual(1);

    const map = wrapper.find({key:"0"}).first();
    map.simulate("click");

    expect(wrapper.instance().getTrackPoints().length).toEqual(0);
});