import Welcome from "./Welcome";


test("Define Welcome", () => {
    expect(Welcome).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<Welcome />);
    expect(wrapper).toMatchSnapshot();
});