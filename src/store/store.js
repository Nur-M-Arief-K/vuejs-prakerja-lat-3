import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      daftarKegiatan: []
    }
  },
  mutations: {
    tambahkanKegiatan (state, payload) {
      state.daftarKegiatan.push(payload);
    }
  }
})

export default store