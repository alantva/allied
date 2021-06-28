import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import plan from "./plan";
import platform from "./platform";

export default store(function () {
  const Store = createStore({
    modules: {
      plan,
      platform,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
