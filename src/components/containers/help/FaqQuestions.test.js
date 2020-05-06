import FaqQuestions from "./FaqQuestions";

test("FaqQuestions", () => {
    expect(FaqQuestions).toBeDefined();
});

test("Renders Correct", () => {
    const wrapper = render(<FaqQuestions />);
    expect(wrapper).toMatchSnapshot();
});