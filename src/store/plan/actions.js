import { $api } from "boot/axios";

export async function fetchAllByPlatformId({ commit }, id) {
  let all = [];
  try {
    const { data } = await $api.get(`planos/${id}`);
    all = Array.from(data?.planos);
    commit("SET_ALL", all);
  } catch (error) {
    commit("SET_ALL");
  } finally {
    return all;
  }
}
