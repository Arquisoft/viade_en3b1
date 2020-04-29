import Router from './Router';

test('Define Router', () => {
  expect(Router).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = shallow(<Router />);
  expect(wrapper).toMatchSnapshot();
});