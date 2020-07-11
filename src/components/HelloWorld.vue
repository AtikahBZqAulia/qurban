<template>
  <div class="hello">
    <b-jumbotron
      header="Project Taat : Qurban 1441 H"
      lead="Mematuhi Perintah Allah Hanya dengan Sekali Klik"
      bg-variant="warning"
    >
      <p>Sapi, Kambing, dan Domba Pilihan</p>
      <b-button href="/konfirmasi" variant="outline-dark" text-variant="white">KONFIRMASI PEMBAYARAN</b-button>
      <qurbannow />
    </b-jumbotron>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-jumbotron bg-variant="white" >
            <template v-slot:header class="title">Gratis</template>

            <template v-slot:lead>Ongkos Kirim untuk Wilayah Jabodetabek</template>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-jumbotron bg-variant="white" >
            <template v-slot:header class="title">H-2</template>

            <template v-slot:lead>Pengiriman Hewan Qurban</template>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-jumbotron bg-variant="white">
            <template v-slot:header class="title">H-5</template>

            <template v-slot:lead>Maksimal Pembayaran Lunas</template>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-jumbotron bg-variant="white">
            <template v-slot:header class="title">60%</template>

            <template v-slot:lead>Uang Muka</template>
          </b-jumbotron>
        </b-col>
        <b-col>
          <b-jumbotron bg-variant="white">
            <template v-slot:header text-variant="title" >Gratis</template>

            <template v-slot:lead>Perawatan Hewan Qurban</template>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-jumbotron bg-variant="warning">
      <h1>Produk Kami</h1>
      <br />
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-card
              title="Sapi"
              img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107378310_3208389959223549_7181401911804087925_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeHgSUu5xiMT-Xt1KL5VMj_JgyMx9SDuk5iDIzH1IO6TmH6LscexHLeG79oQ4DpnUw58zVfqWts54VbCa3o2lohc&_nc_ohc=atOcmK_CB5EAX_XWhi_&_nc_ht=scontent-xsp1-1.xx&oh=e26868a0e2b939beb864d47101349579&oe=5F2D1FC9"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-button v-b-toggle.sapi variant="outline-warning" text-variant="white">LIHAT HARGA</b-button>
              <b-sidebar id="sapi">
                <b-card title="Pilih Tipe Sapi">
                  <b-card
                    title="Ekonomis (<250 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp16,5 juta</h1>
                  </b-card>
                  <b-card
                    title="Standar (300 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp19 juta</h1>
                  </b-card>
                  <b-card
                    title="Mantap (350 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp22 juta</h1>
                  </b-card>
                  <b-card
                    title="Dahsyat (400 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp25 juta</h1>
                  </b-card>
                  <b-card
                    title="Super (>450 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp28 juta</h1>
                  </b-card>
                </b-card>
              </b-sidebar>
              <b-button v-b-toggle.pesan class="btn btn-warning">PESAN SEKARANG</b-button>
              <b-collapse id="pesan">
                <b-card>
                  <a href="/form-pemesanan" class="btn btn-warning" role="button">PESAN DISINI</a>
                  <b-button href="https://wasap.at/qzfYDk" variant="success">VIA WHATSAPP</b-button>
                </b-card>
              </b-collapse>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              title="Kambing"
              img-src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/107502692_3208389752556903_2791324398179724169_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_eui2=AeH9znhA1t9BnZzyF58J47VxBsHEKn73QgYGwcQqfvdCBvesCI4JugEMWRq0Xf2a4JVw26OFch5_V5ZtBc3ngOtb&_nc_ohc=dyiiYKnkoy4AX9lQ_zw&_nc_ht=scontent-xsp1-2.xx&oh=39a16e1c4b72f57d9c1f4c367e45b950&oe=5F2E030A"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-button
                v-b-toggle.kambing
                variant="outline-warning"
                text-variant="white"
              >LIHAT HARGA</b-button>
              <b-sidebar id="kambing">
                <b-card title="Pilih Tipe Kambing">
                  <b-card
                    title="Ekonomis (20 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp2 juta</h1>
                  </b-card>
                  <b-card
                    title="Standar (21-26 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp2,6 juta</h1>
                  </b-card>
                  <b-card
                    title="Mantap (27-34 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp3,4 juta</h1>
                  </b-card>
                  <b-card
                    title="Dahsyat (35-40 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp4 juta</h1>
                  </b-card>
                  <b-card
                    title="Super (>40 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp4,8 juta</h1>
                  </b-card>
                </b-card>
              </b-sidebar>
              <b-button v-b-toggle.pesan class="btn btn-warning">PESAN SEKARANG</b-button>
              <b-collapse id="pesan">
                <b-card>
                  <a href="/form-pemesanan" class="btn btn-warning" role="button">PESAN DISINI</a>
                  <b-button href="https://wasap.at/qzfYDk" variant="success">VIA WHATSAPP</b-button>
                </b-card>
              </b-collapse>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              title="Domba Klasik"
              img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107378310_3208389959223549_7181401911804087925_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeHgSUu5xiMT-Xt1KL5VMj_JgyMx9SDuk5iDIzH1IO6TmH6LscexHLeG79oQ4DpnUw58zVfqWts54VbCa3o2lohc&_nc_ohc=atOcmK_CB5EAX_XWhi_&_nc_ht=scontent-xsp1-1.xx&oh=e26868a0e2b939beb864d47101349579&oe=5F2D1FC9"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-button
                v-b-toggle.domba-klasik
                variant="outline-warning"
                text-variant="white"
              >LIHAT HARGA</b-button>
              <b-sidebar id="domba-klasik">
                <b-card title="Pilih Tipe Domba Klasik">
                  <b-card
                    title="Ekonomis (25-30 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp2,8 juta</h1>
                  </b-card>
                  <b-card
                    title="Standar (31-35 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp3,45 juta</h1>
                  </b-card>
                  <b-card
                    title="Mantap (36-40 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp3,9 juta</h1>
                  </b-card>
                  <b-card
                    title="Dahsyat (41-45 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp4,4 juta</h1>
                  </b-card>
                  <b-card
                    title="Super (46-50 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp4,85 juta</h1>
                  </b-card>
                </b-card>
              </b-sidebar>
              <b-button v-b-toggle.pesan class="btn btn-warning">PESAN SEKARANG</b-button>
              <b-collapse id="pesan">
                <b-card>
                  <a href="/form-pemesanan" class="btn btn-warning" role="button">PESAN DISINI</a>
                  <b-button href="https://wasap.at/qzfYDk" variant="success">VIA WHATSAPP</b-button>
                </b-card>
              </b-collapse>
            </b-card>
          </b-col>
          <b-col>
            <b-card
              title="Domba Premium"
              img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107378310_3208389959223549_7181401911804087925_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeHgSUu5xiMT-Xt1KL5VMj_JgyMx9SDuk5iDIzH1IO6TmH6LscexHLeG79oQ4DpnUw58zVfqWts54VbCa3o2lohc&_nc_ohc=atOcmK_CB5EAX_XWhi_&_nc_ht=scontent-xsp1-1.xx&oh=e26868a0e2b939beb864d47101349579&oe=5F2D1FC9"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <!-- <b-card-text>Getting </b-card-text> -->
              <b-button
                v-b-toggle.domba-premium
                variant="outline-warning"
                text-variant="white"
              >LIHAT HARGA</b-button>
              <b-sidebar id="domba-premium">
                <b-card title="Pilih Tipe Domba Premium">
                  <b-card
                    title="Ekonomis (60-75 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp7,5 juta</h1>
                  </b-card>
                  <b-card
                    title="Standar (76-90 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp8,75 juta</h1>
                  </b-card>
                  <b-card
                    title="Super (91-100 kg)"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <h1>Rp9,8 juta</h1>
                  </b-card>
                </b-card>
              </b-sidebar>
              <b-button v-b-toggle.pesan class="btn btn-warning">PESAN SEKARANG</b-button>
              <b-collapse id="pesan">
                <b-card>
                  <a href="/form-pemesanan" class="btn btn-warning" role="button">PESAN DISINI</a>
                  <b-button href="https://wasap.at/qzfYDk" variant="success">VIA WHATSAPP</b-button>
                </b-card>
              </b-collapse>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      
    </b-jumbotron>
  </div>
</template>


<script>
import qurbannow from '@/components/qurbannow.vue'

export default {
  name: "HelloWorld",
  components: {
    qurbannow
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-orange {
  background: #fd7e14;
}
.text-purple {
  color: purple;
}
</style>
