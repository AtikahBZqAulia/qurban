<template>
  <div>
    <b-row>
      <b-col>
        <b-jumbotron bg-variant="white">
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
              img-src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/107762591_3210586502337228_2149638957988759168_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHzqqYsq8tLOabrUlRpEwp7Cx2fwJ-pUe0LHZ_An6lR7WTwKlH40PEixWtBCMKwMI4SOch4kFwTNBXyftSPXbmZ&_nc_ohc=zikAdTzWVrsAX_qlfLD&_nc_ht=scontent-xsp1-2.xx&oh=9d80986032e296f2e50a26e2d3789d20&oe=5F2C3902"
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
              img-src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/106574379_3210586442337234_4339847727278798343_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeGLT7vYl1UN952w7ABt9dq2Ek_J1uvM9K0ST8nW68z0rTMbXHsSzO_0rMQsd4hqD3wkBAKOjcC3oa2J7CwQbcgr&_nc_ohc=FTE8u6INPp4AX9rWMQ8&_nc_ht=scontent-xsp1-2.xx&oh=4ce42f3b2b0a9660f102d7b7b80f0b32&oe=5F2EE73A"
            ></b-carousel-slide>
          </b-carousel>
        </b-jumbotron>
      </b-col>
      <b-col>
        <b-jumbotron bg-variant="white">
          <h1>CEK</h1>
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
            <b-card title="Daftar Harga Kambing">
              <b-table striped hover :items="items"></b-table>
            </b-card>
          </b-collapse>
          <b-sidebar id="my-sidebar" title="Lokasi Kambing" shadow>
            <div class="px-7 py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63395.62035067345!2d106.8486941273632!3d-6.7422312522186445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ca5c6c58088f%3A0x92c638f887c2a6ef!2sCimande%2C%20Caringin%2C%20Bogor%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1594010723911!5m2!1sen!2sid"
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
        { Tipe: "Ekonomis", Berat: "20 kg", Harga: "  Rp 2.000.000  " },
        { Tipe: "Standar", Berat: "21-26 kg", Harga: " Rp 2.600.000 " },
        { Tipe: "Mantap", Berat: "27-34 kg", Harga: " Rp 3.400.000 " },
        { Tipe: "Dahsyat", Berat: "35-40 kg", Harga: " Rp 4.000.000 " },
        { Tipe: "Super", Berat: ">45 kg", Harga: "  Rp 4.800.000 " }
      ]
    };
  }
};
</script>

<style>
.wrapper {
  margin: 1000px;
  font-family: "Courier New", Courier, monospace;
}
</style>

