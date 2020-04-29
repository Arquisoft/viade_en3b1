import PrivateLayout from './PrivateLayout';

test('Define PrivateLayout', () => {
  expect(PrivateLayout).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = shallow(<PrivateLayout />);
  expect(wrapper).toMatchSnapshot();
});