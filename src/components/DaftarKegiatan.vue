<template>
  <span class="notifikasi-tidak-ada-kegiatan" v-if="daftarKegiatan.length == 0"><i>Belum ada kegiatan yang ditambahkan, silahkan tambahkan kegiatan melalui kolom di bawah ini.</i></span>
  <ol class="daftar-kegiatan">
    <li class="daftar-kegiatan__item" v-for="(kegiatan, index) in daftarKegiatan" v-bind:key="index">{{kegiatan}}</li>
  </ol>
</template>

<script>
import store from '../store/store'

export default {
  name: 'DaftarKegiatan',
  data() {
    return {
      daftarKegiatan: store.state.daftarKegiatan
    }
  }
};
</script>

<style scoped>
  .notifikasi-tidak-ada-kegiatan {
    font-size: 1.2em;
    display: block;
    text-align: center;
    color: var(--abu-abu);
  }


  .daftar-kegiatan {
    font-size: 1.2em;
  }
</style>