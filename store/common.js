export const state = () => ({
  currentId: "", // 选中的病种id
  symptomsList: [], // 当前病种的病状列表
  currentSymptoms: "", // 主诉病状
  selectedSymptomsList: [], // 详细病状
  selectTime: "", // 选择的时间
})

export const mutations = {
  SET_Key(state, obj) {
    state[obj.key] = obj.data
  },
}
