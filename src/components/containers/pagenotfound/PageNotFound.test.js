import PageNotFound from "./PageNotFound";
import { Typography, Link } from "@material-ui/core";

test("PageNotFound", () => {
    expect(PageNotFound).toBeDefined();
});

test("Renders Correct", () => {
    const wrapper = render(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});

test("404 Title", () => {
    const wrapper = mount(<PageNotFound />);
    const element = wrapper.find({className: "opps-warning-text"}).first().text();
    
    expect(element).toEqual("Sorry, this is not the webpage you are looking for");
});

test("Home Link", () => {
    const wrapper = mount(<PageNotFound />);
    const element = wrapper.find(Link);
    
    expect(element.exists()).toBeTruthy();
    expect(element.text()).toEqual("Home");
});