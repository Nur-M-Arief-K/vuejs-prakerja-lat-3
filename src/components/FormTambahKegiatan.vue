<template>
  <form class="form-tambah-kegiatan" @submit.prevent="tambahkanKegiatan()">
    <label class="form-tambah-kegiatan__label hidden" for="kegiatan">Kegiatan</label>
    <input class="form-tambah-kegiatan__input" type="text" id="kegiatan" v-model="kegiatan" />
    <button class="form-tambah-kegiatan__tombol-submit" type="submit">Tambahkan</button>
  </form>
</template>

<script>
import store from '../store/store'

export default {
  name: "FormTambahKegiatan",
  data() {
    return {
      kegiatan: '',
    }
  },
  methods: {
    tambahkanKegiatan() {
      this.kegiatan.length > 0 &&
        store.commit('tambahkanKegiatan', this.kegiatan)
      this.kegiatan = ''
    }
  }
};
</script>

<style scoped>
.form-tambah-kegiatan {
  font-size: 1.2em;
  display: flex;
  justify-content: end;
}

.form-tambah-kegiatan__label {
  font-size: inherit;
}

.form-tambah-kegiatan__input {
  font-size: inherit;
}

.form-tambah-kegiatan__tombol-submit {
  font-size: inherit;
  background-color: var(--hijau);
  border-color: var(--hijau);
  transition: all 0.3s;
}

.form-tambah-kegiatan__tombol-submit:hover {
  background-color: var(--hijau-muda);
  cursor: pointer;
  transition: all 0.3s;
}
</style>