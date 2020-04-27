import ProfileMenu from './ProfileMenu';

test('Define ProfileMenu', () => {
  expect(ProfileMenu).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<ProfileMenu />);
  expect(wrapper).toMatchSnapshot();
});