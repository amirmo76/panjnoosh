import { shallowMount } from "@vue/test-utils";
import LoginPage from "../pages/LoginPage";

test("should match snapshot", () => {
  const wrapper = shallowMount(LoginPage);
  expect(wrapper.element).toMatchSnapshot();
});
