import SideNav from "@/components/SideNav.vue";
import { shallowMount } from "@vue/test-utils";
describe("sideNav.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(SideNav);
    expect(wrapper.exists()).toBe(true);
  });
});
