import Help from "./Help";

test("Help", () => {
    expect(Help).toBeDefined();
});

test("Renders Correct", () => {
    const wrapper = render(<Help />);
    expect(wrapper).toMatchSnapshot();
});