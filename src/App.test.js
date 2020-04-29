import App from "./App";
import Router from "./components/containers/Router";

test('Define App', () => {
  expect(App).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});

test("Router", () => {
  const wrapper = mount(<App />);
  const router = wrapper.find(Router);
  expect(router).toBeDefined();
  expect(router.exists()).toBeTruthy();
});