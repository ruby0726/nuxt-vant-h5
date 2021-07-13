export const state = () => ({
  navTitle: "",
})

export const mutations = {
  SET_NavTitle(state, data) {
    state.navTitle = data
  },
}
