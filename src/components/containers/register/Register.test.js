import Register from "./Register";
import { Avatar } from "@material-ui/core";
import { shallow } from "enzyme";


test("Define Register", () => {
    expect(Register).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<Register />);
    expect(wrapper).toMatchSnapshot();
});

test("Providers Btns", () => {
    const wrapper = mount(<Register />);

    const element = wrapper.find({id: "btn-inrupt-provider"}).first();
    expect(element).toBeDefined();
    expect(element.text()).toEqual("Inrupt");

    const element2 = wrapper.find({id: "btn-solid-community-provider"}).first();
    expect(element2).toBeDefined();
    expect(element2.text()).toEqual("Solid Community");
});

test("Avatar", () => {
    const wrapper = mount(<Register />);

    const element = wrapper.find(Avatar).first();
    expect(element).toBeDefined();
});;