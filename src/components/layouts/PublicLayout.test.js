import PublicLayout from './PublicLayout';

test('Define PublicLayout', () => {
  expect(PublicLayout).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = shallow(<PublicLayout />);
  expect(wrapper).toMatchSnapshot();
});