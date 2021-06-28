import { boot } from "quasar/wrappers";
import axios from "axios";
import { Notify } from "quasar";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const $api = axios.create({ baseURL: process.env.BASE_URL });

$api.interceptors.response.use(
  (res) => res,
  (error) => {
    Notify.create({ type: "negative", message: error.message });
    return Promise.reject(error);
  }
);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = $api;
});

export { $api };
