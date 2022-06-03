import { shallowMount, mount } from '@vue/test-utils'
import TopBar from "@/components/TopBar.vue";
import { createStore } from "vuex";
const actions = {
    SearchNews: jest.fn()
}
const store = createStore ({
    actions
})



describe("topBar.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(TopBar);
    expect(wrapper.exists()).toBe(true);
  });

  it("dispatches SearchNews action if input is not empty", async () => {
    const wrapper = mount(TopBar, {
        global: {
            plugins: [store]
        }
    });
    //await wrapper.find("#input").setValue("d")
    await wrapper.find("form").trigger("submit.prevent");

    expect(actions.SearchNews).toHaveBeenCalled();
  });
});
