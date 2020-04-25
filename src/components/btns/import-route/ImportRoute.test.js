import ImportRoute from './ImportRoute';
import { shallow, mount } from 'enzyme';
import { getByTestId, render, fireEvent } from '@testing-library/react';

test('Define ImportRoute', () => {
    expect(ImportRoute).toBeDefined();
});

test('Renders correctly', () => {
    const wrapper = shallow(<ImportRoute.WrappedComponent />);
    expect(wrapper).toMatchSnapshot();
});

test('Methods', () => {
    const wrapper = shallow(<ImportRoute.WrappedComponent history={[]} />);
    const instance = wrapper.shallow().instance();

    instance.handleOpen();
    instance.handleClose();
    instance.handleSave();
});

test("Click import btn", () => {
    const { container } = render(<ImportRoute.WrappedComponent />);

    const button = getByTestId(container, 'btn-import-route-test');
    fireEvent.click(button);
});