import About from "./About";

test("About", () => {
    expect(About).toBeDefined();
});

test("Renders Correct", () => {
    const wrapper = render(<About />);
    expect(wrapper).toMatchSnapshot();
});