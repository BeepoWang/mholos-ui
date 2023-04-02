import { defineComponent as e, computed as r, openBlock as u, createElementBlock as c, normalizeClass as p, unref as s } from "vue";
import "./style/index.css";
const m = e({ name: "m-button" }), f = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(n) {
    const t = n, o = r(() => ({ [`m-button--${t.type}`]: t.type }));
    return (l, a) => (u(), c("button", {
      class: p(["m-button", s(o)])
    }, "测试按钮", 2));
  }
});
export {
  f as default
};
