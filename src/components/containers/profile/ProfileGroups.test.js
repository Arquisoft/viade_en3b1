import ProfileGroups from './ProfileGroups';

test('Define ProfileGroups', () => {
  expect(ProfileGroups).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<ProfileGroups />);
  expect(wrapper).toMatchSnapshot();
});