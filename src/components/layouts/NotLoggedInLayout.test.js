import NotLoggedInLayout from './NotLoggedInLayout';

test('Define NotLoggedInLayout', () => {
  expect(NotLoggedInLayout).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = shallow(<NotLoggedInLayout />);
  expect(wrapper).toMatchSnapshot();
});