import Login from './Login';

test('Define Login', () => {
  expect(Login).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<Login />);
  expect(wrapper).toMatchSnapshot();
});