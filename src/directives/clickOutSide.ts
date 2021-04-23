export const clickOutside = {
  beforeMount: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
