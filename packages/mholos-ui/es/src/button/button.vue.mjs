import { defineComponent as o, computed as r, openBlock as u, createElementBlock as p, normalizeClass as m, unref as s } from "vue";
import "./style/index.css";
const i = /* @__PURE__ */ o({
  __name: "button",
  props: {
    type: null
  },
  setup(e) {
    const t = e;
    defineOptions({ name: "m-button" });
    const n = r(() => ({ [`m-button--${t.type}`]: t.type }));
    return (c, a) => (u(), p("button", {
      class: m(["m-button", s(n)])
    }, "测试按钮", 2));
  }
});
export {
  i as default
};
