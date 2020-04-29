import MisRutas from './MisRutas';

test('Define MisRutas', () => {
  expect(MisRutas).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<MisRutas />);
  expect(wrapper).toMatchSnapshot();
});