import { shallowMount } from "@vue/test-utils";
import SignupForm from "../components/SignupForm";

test("should match snapshot", () => {
  const wrapper = shallowMount(SignupForm);
  expect(wrapper.element).toMatchSnapshot();
});
