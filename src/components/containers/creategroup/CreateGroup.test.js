import CreateGroup from './CreateGroup';

test('Define CreateGroup', () => {
  expect(CreateGroup).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<CreateGroup />);
  expect(wrapper).toMatchSnapshot();
});