import Footer from "./Footer";

test("Define Footer", () => {
    expect(Footer).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toMatchSnapshot();
});