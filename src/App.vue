<template>
  <div id="app">
    <div class="loader" v-if="isLoading" >
      <b-spinner></b-spinner>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  mounted() {
    if(localStorage.getItem('m_token')===null){
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['isLoading', 'refCount'])
  },
  created() {
    this.$http.interceptors.request.use((config) => {
      this.$store.commit('loading', true);
      return config;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });

    this.$http.interceptors.response.use((response) => {
      this.$store.commit('loading', false);
      return response;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });
  },

}
</script>

<style>
.loader {
  position: fixed;
  width: 100vw;
  height: 100%;
  background: rgba(255,255,255,0.5);
  z-index: 2222;
  display: flex;
  align-items: center;
  justify-content: center;

}

.ball_father {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aniImage img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation-duration: 2.6s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  -webkit-animation: slidein 1.5s infinite alternate;
  -moz-animation: slidein 1.5s infinite alternate;
  animation: slidein 1.5s infinite alternate;
}

@keyframes slidein {
  from {
    transform: rotate(0deg);
    width: 50px;
    height: 50px;
  }
  to{
    transform: rotate(360deg);
    width: 200px;
    height: 200px;
  }
}

.logo_loader {
  width: 300px;
  margin-top: 220px;
}

.css-3d-text {
  font-size: 90px;
  color: #ededed;
  font-family: "Krona One";
  text-shadow: 0px 0px 0 rgb(250, 250, 250),
  1px 1px 0 rgb(245, 245, 245),
  2px 2px 0 rgb(240, 240, 240),
  3px 3px 0 rgb(235, 235, 235),
  4px 4px 0 rgb(230, 230, 230),
  5px 5px 0 rgb(225, 225, 225),
  6px 6px 0 rgb(220, 220, 220),
  7px 7px 0 rgb(215, 215, 215),
  8px 8px 0 rgb(210, 210, 210),
  9px 9px 0 rgb(205, 205, 205),
  10px 10px 0 rgb(200, 200, 200),
  11px 11px 10px rgba(9, 20, 35, 0.6),
  11px 11px 1px rgba(9, 20, 35, 0.5),
  0px 0px 10px rgba(9, 20, 35, .2);
}

@media (max-width: 1200px) {
  .css-3d-text {
    font-size: 50px;
  }

  .ball {
    width: 60px;
    height: 60px;
  }
}

.v-spinner {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.see_days {
  display: flex;
  justify-content: center;
  width: max-content;
  width: 160px;
  margin: 0 24px 0 24px;
}

/*.usertab_img svg path{*/
/*  stroke: red ;*/
/*}*/
</style>
