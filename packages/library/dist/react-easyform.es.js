import { jsx as d } from "react/jsx-runtime";
import { useState as s } from "react";
const p = ({ onSubmit: r, children: n }) => {
  const [e, m] = s(""), [a, l] = s(""), i = (t) => {
    m(t.target.value);
  }, c = (t) => {
    l(t.target.value);
  }, o = (t) => {
    t.preventDefault(), r({ email: e, password: a });
  };
  return /* @__PURE__ */ d("form", { onSubmit: o, children: n({
    email: e,
    password: a,
    handleEmailChange: i,
    handlePasswordChange: c,
    handleSubmit: o
  }) });
};
export {
  p as EasyForm
};
