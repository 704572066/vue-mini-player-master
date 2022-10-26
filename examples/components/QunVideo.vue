<template>
  <div>
   <!-- <div v-for="(item,i) in video" :key="i">
    <VueMiniPlayer ref="vueMiniPlayer"
                   :mutex="true"
                   :video="video[i]"
                   @fullscreen="fullscreen" />
   </div> -->
   <transition name="fade">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,i) in video" :key="i">
                <div class="qun-video">
                  <VueMiniPlayer ref="vueMiniPlayer"
                      :mutex="true"
                      :video="video[i]"
                      @fullscreen="fullscreen" />
                </div>
          </swiper-slide>
      </swiper>
    </transition>
  </div>
  <!-- <div>
        <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
  </div> -->
</template>
<script>
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'QunVideo',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      video: [{
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/1.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      {
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/2.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      {
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/3.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      {
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/4.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      {
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/5.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      {
        // url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        url: '/video/6.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      }],
      swiperOptions: {
        slidesPerView: 3,
        grabCursor: true,
        spaceBetween: 50,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }

    };
  },
  watch: {},
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  filters: {},
  methods: {
    fullscreen(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    }
  },
  created() {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.$refs.mySwiper.slideTo(3, 1000, false)
    // this.swiper.slideTo(3, 1000, false)
  },
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.qun-video {
  max-width: 500px;
  width: 100%;
  min-width: 300px;
  height: 15em;
  margin: 0 auto;
}

.swiper-slide{
  width: 60%;
  height: 300px;
  img{
    width:100%;
    height:100%;
  }
}

</style>

