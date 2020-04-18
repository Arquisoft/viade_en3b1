import UserRoutes from "./UserRoutes";

test("Define UserRoutes", () => {
    expect(UserRoutes).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<UserRoutes />);
    expect(wrapper).toMatchSnapshot();
});