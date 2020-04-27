import Profile from './Profile';

test('Define Profile', () => {
  expect(Profile).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<Profile />);
  expect(wrapper).toMatchSnapshot();
});