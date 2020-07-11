<template>
  <div>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/106983678_3210585949003950_3277778209038121692_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeHmLxW6n-IdYAuyv5-3WWpDPIP4SvqSIt08g_hK-pIi3bi1P2HdinyZRE4HZC__RF0FB8T5LvwVs8JEU5yf7TjP&_nc_ohc=4FefRSrvDysAX9yOiXH&_nc_ht=scontent-xsp1-1.xx&oh=c98279e671b5b3912a62e1555bf2335b&oe=5F2F029D"
            fluid
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/107897311_3210586669003878_7808704223447247395_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeFU0CIzxT46zZwkmsdKwLB8k1Gi_aXVtR-TUaL9pdW1HyswPX3dGhthLq8t8xweKjhZ5wJGwYH_L8GWkE9xDh5G&_nc_ohc=_E-lMQVNtLAAX-M7x_U&_nc_ht=scontent-xsp1-2.xx&oh=b99bc5f542c8aaeba57b1b12d2cafddb&oe=5F2BB9D1"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107581128_3210586612337217_753076081422043829_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeEOVA3OA8gJW3SpCtSFBUrxBm2jHEeNh3IGbaMcR42HcnYxldAiz4UubHxpeLIgRk_H6HhfU4W1THNCAplMYz9E&_nc_ohc=KGgRjPBzT9QAX9JI-EE&_nc_ht=scontent-xsp1-1.xx&oh=bacef7b04145ca52322a3d85be46b7af&oe=5F2F4E79"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107581128_3210586612337217_753076081422043829_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeEOVA3OA8gJW3SpCtSFBUrxBm2jHEeNh3IGbaMcR42HcnYxldAiz4UubHxpeLIgRk_H6HhfU4W1THNCAplMYz9E&_nc_ohc=KGgRjPBzT9QAX9JI-EE&_nc_ht=scontent-xsp1-1.xx&oh=bacef7b04145ca52322a3d85be46b7af&oe=5F2F4E79"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/107581128_3210586612337217_753076081422043829_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeEOVA3OA8gJW3SpCtSFBUrxBm2jHEeNh3IGbaMcR42HcnYxldAiz4UubHxpeLIgRk_H6HhfU4W1THNCAplMYz9E&_nc_ohc=KGgRjPBzT9QAX9JI-EE&_nc_ht=scontent-xsp1-1.xx&oh=bacef7b04145ca52322a3d85be46b7af&oe=5F2F4E79"
          ></b-carousel-slide>
        </b-carousel>
        <b-row>
          <b-col>
            <b-button variant="outline-warning">&lsaquo; Kambing</b-button>
            <b-button variant="outline-warning">Domba &rsaquo;</b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-jumbotron bg-variant="white">
          <h1>Cek Harga</h1>
          <h2>Tipe: {{ slider }}</h2>
          <custom-slider :values="sliderValues" raising v-model="slider" />
          <h2>Scan QR untuk pesan sekarang</h2>
          <b-img
            src="https://chart.googleapis.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=H&chl=https://wasap.at/qzfYDk"
          ></b-img>
          <br />
          <a href="https://wasap.at/qzfYDk" class="btn btn-purple" role="button">PESAN SEKARANG</a>
          <br />

          <b-button v-b-toggle.my-collapse variant="outline-warning">Lihat Pricelist</b-button>
          <b-button v-b-toggle.my-sidebar variant="outline-warning">Lihat Lokasi</b-button>
          <b-collapse id="my-collapse">
            <b-card title="Daftar Harga Domba">
              <b-table striped hover :items="items"></b-table>
            </b-card>
          </b-collapse>
          <b-sidebar id="my-sidebar" title="Lokasi Sapi" shadow>
            <div class="px-7 py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.454510653275!2d106.90109232641299!3d-6.1854658535786635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b17d4e9797b%3A0x1a900d7ef42d566a!2sCakung%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1594010826080!5m2!1sen!2sid"
                width="600"
                height="450"
                frameborder="0"
                style="border:0;"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </b-sidebar>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default {
  name: "App",
  components: {
    CustomSlider
  },
  data() {
    return {
      slider: "Ekonomis (20 kg)",
      sliderValues: [
        {
          label: "IDR 2 juta",
          value: "Ekonomis (20 kg)"
        },
        {
          label: "IDR 2,6 juta",
          value: "Standar (21-26 kg)"
        },
        {
          label: "IDR 3,4 juta",
          value: "Mantap (27-34 kg)"
        },
        {
          label: "IDR 4 juta",
          value: "Dahsyat (35-40 kg)"
        },
        {
          label: "IDR 4,8 juta",
          value: "Super (>45 kg)"
        }
      ],
      items: [
        { Tipe: "Ekonomis", Berat: "<250 kg", Harga: " Rp 16.500.000 " },
        { Tipe: "Standar", Berat: "300 kg", Harga: " Rp 19.000.000 " },
        { Tipe: "Mantap", Berat: "350 kg", Harga: " Rp 22.000.000 " },
        { Tipe: "Dahsyat", Berat: "400 kg", Harga: " Rp 25.000.000 " },
        { Tipe: "Super", Berat: ">450 kg", Harga: "  Rp 28.000.000 " }
      ]
    };
  }
};
</script>

<style>
.wrapper {
  padding: 1000px;
  font-family: "Courier New", Courier, monospace;
}
</style>

