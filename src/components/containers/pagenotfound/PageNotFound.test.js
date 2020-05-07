import PageNotFound from "./PageNotFound";
import { Typography, Link } from "@material-ui/core";

test("PageNotFound", () => {
    expect(PageNotFound).toBeDefined();
});

test("Renders Correct", () => {
    const wrapper = render(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});

test("Home Link", () => {
    const wrapper = mount(<PageNotFound />);
    const element = wrapper.find(Link);
    
    expect(element.exists()).toBeTruthy();
    expect(element.text()).toEqual("Home");
});