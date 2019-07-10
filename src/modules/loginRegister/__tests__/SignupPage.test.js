import { shallowMount } from "@vue/test-utils";
import SignupPage from "../pages/SignupPage";

test("should match snapshot", () => {
  const wrapper = shallowMount(SignupPage);
  expect(wrapper.element).toMatchSnapshot();
});
