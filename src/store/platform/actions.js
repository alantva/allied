import { $api } from "boot/axios";

export async function fetchAll({ commit }) {
  let all = [];
  try {
    const { data } = await $api.get("plataformas");
    all = Array.from(data?.plataformas);
    commit("SET_ALL", all);
  } catch (error) {
    commit("SET_ALL");
  } finally {
    return all;
  }
}
