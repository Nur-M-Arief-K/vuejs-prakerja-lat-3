<template>
  <h1>Daftar Kegiatan</h1>
  <DaftarKegiatan />
  <FormTambahKegiatan />
  <NotifikasiHebat />
</template>

<script>
import FormTambahKegiatan from "./components/FormTambahKegiatan.vue";
import DaftarKegiatan from "./components/DaftarKegiatan.vue";
import NotifikasiHebat from "./components/NotifikasiHebat.vue";

export default {
  name: "App",
  components: {
    FormTambahKegiatan,
    DaftarKegiatan,
    NotifikasiHebat
  },
};
</script>

<style>
:root {
    --hijau: #42b883;
    --hijau-muda: #52e3a2;
    --abu-abu: #cacaca;
}

button {
  border-style: solid;
}

.hidden {
  display: none;
}
</style>
