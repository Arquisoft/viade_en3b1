import ProfileFriends from './ProfileFriends';

test('Define ProfileFriends', () => {
  expect(ProfileFriends).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<ProfileFriends />);
  expect(wrapper).toMatchSnapshot();
});