import NavBar from "./NavBar";
import { Typography, Button } from "@material-ui/core";
import MisRutas from "../../btns/mis-rutas/MisRutas";

test("Define NavBar", () => {
    expect(NavBar).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<NavBar />);
    expect(wrapper).toMatchSnapshot();
});

test("Title ViaDe", () => {
    const wrapper = mount(<NavBar />);
    const title = wrapper.find(Typography).first().text();
    expect(title).toEqual("ViaDe");
});

test("Btn Social Feed", () => {
    const wrapper = mount(<NavBar />);
    const element = wrapper.find({ href: '#/social-feed' });

    // no session -> not exists
    expect(element.exists()).toBeFalsy();
});

test("Btn MisRutas", () => {
    const wrapper = mount(<NavBar />);
    const element = wrapper.find(MisRutas);
    expect(element).toBeDefined();

    // no session -> not exists
    expect(element.exists()).toBeFalsy();
});

test("Btn Login", () => {
    const wrapper = mount(<NavBar />);
    const login = wrapper.find({ href: '#/login' }).first().text();
    expect(login).toBeDefined();
    expect(login).toEqual("Sign In");
});

test("Btn Sign Up", () => {
    const wrapper = mount(<NavBar />);
    const element = wrapper.find({ href: '#/register' }).first().text();
    expect(element).toEqual("Sign Up");
});
