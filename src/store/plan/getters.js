export function getAllActive(state) {
  return state.all.filter((item) => item.ativo);
}
