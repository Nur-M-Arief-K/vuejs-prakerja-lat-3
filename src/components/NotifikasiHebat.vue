<template>
  <span class="notifikasi-hebat" v-if="jumlahDaftarKegiatan.length >= 4">Hebat!</span>
</template>

<script>
import store from '../store/store'

export default {
  name: 'NotifikasiHebat',
  data() {
    return {
      jumlahDaftarKegiatan: store.state.daftarKegiatan,
    }
  },
}
</script>

<style scoped>
  .notifikasi-hebat {
    font-size: 1.2em;
    display: block;
    margin-top: 0.5em;
    text-align: end;
    color: var(--hijau);
  }
</style>