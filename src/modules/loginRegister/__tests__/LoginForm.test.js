import { shallowMount } from "@vue/test-utils";
import LoginForm from "../components/LoginForm";

test("should match snapshot", () => {
  const wrapper = shallowMount(LoginForm);
  expect(wrapper.element).toMatchSnapshot();
});

test("should validate email correctly", () => {
  const wrapper = shallowMount(LoginForm);
  wrapper.vm.onEmailChange("12324");
  expect(wrapper.vm.email).toBe("");

  wrapper.vm.onEmailChange("amirmo");
  expect(wrapper.vm.email).toBe("");

  wrapper.vm.onEmailChange("amir@gmail.com");
  expect(wrapper.vm.email).toBe("amir@gmail.com");

  wrapper.vm.onEmailChange("");
  expect(wrapper.vm.email).toBe("amir@gmail.com");

  wrapper.vm.onEmailChange("ali@yahoo.com");
  expect(wrapper.vm.email).toBe("ali@yahoo.com");
});

test("should validate passwrod correctly", () => {
  const wrapper = shallowMount(LoginForm);
  wrapper.vm.onPasswordChange("12345");
  expect(wrapper.vm.password).toBe("");

  wrapper.vm.onPasswordChange("0965687");
  expect(wrapper.vm.password).toBe("0965687");
});

// test("should call onEmailChange on email input with the right value", () => {
//   // test
//   const wrapper = mount(LoginForm);
//   const spy = jest.spyOn(wrapper.vm, "onEmailChange");

// });

// test("should call onPasswordChange on password input with the right value", () => {
//   // test
// });

// test("should call onSubmit on clicking submit ", () => {
//   // test
// });
