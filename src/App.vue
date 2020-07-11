<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="warning" bg-transparent sticky="true">
      <b-navbar-brand href="/">JakartaQurbanProject</b-navbar-brand>
      <b-navbar-nav class="ml-auto" type="light">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item-dropdown text="Produk" right>
          <b-dropdown-item href="/sapi">Sapi</b-dropdown-item>
          <b-dropdown-item href="/kambing">Kambing</b-dropdown-item>
          <b-dropdown-item href="/domba">Domba</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button href="/konfirmasi" variant="outline-dark" text-variant="white">KONFIRMASI PEMBAYARAN</b-button>
        <qurbannow />
        <!-- <a href="/form-pemesanan" class="btn btn-purple" role="button">QURBAN SEKARANG</a>       -->
      </b-navbar-nav>
    </b-navbar>
    <router-view />
    <div class="footer-copyright text-center py-3">&copy; Made with Love by Atikah Aulia</div>
  </div>
</template>
<script>
import qurbannow from '@/components/qurbannow.vue'

export default {
  name: 'App',
  components: {
    qurbannow
  }
}
</script>


<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-purple {
  background: purple;
  color: white;
}
.outline-purple {
  color: purple;
}
.title{
  color:purple;
}
</style>
