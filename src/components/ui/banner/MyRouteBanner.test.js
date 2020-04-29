import MyRouteBanner from './MyRouteBanner';

test("Define MyRouteBanner", () => {
    expect(MyRouteBanner).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<MyRouteBanner />);
    expect(wrapper).toMatchSnapshot();
});