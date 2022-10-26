<template>
  <div>
   <transition name="fade">
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,i) in imgs" :key="i">
            <h3>  杭州随到随玩文化科技有限公司成立于2021年10月18日，
              注册地位于浙江省杭州市拱墅区新青年广场3幢1706室，法定代表人为郑巍。
              经营范围包括一般项目：组织文化艺术交流活动；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；文艺创作；
              棋牌室服务；休闲娱乐用品设备出租；食品销售（仅销售预包装食品）；会议及展览服务；图文设计制作；广告发布；
              广告设计、代理；信息咨询服务（不含许可类信息咨询服务）(除依法须经批准的项目外，凭营业执照依法自主开展经营活动)。
              许可项目：游艺娱乐活动；广播电视节目制作经营；演出经纪；旅游业务(依法须经批准的项目，经相关部门批准后方可开展经营活动，
              具体经营项目以审批结果为准)</h3>
          </swiper-slide>
      </swiper>
    </transition>
  </div>
</template>
<script>
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'Img',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      imgs: [{ src: require('../assets/img/1.jpg') }, { src: require('../assets/img/2.jpg') }, { src: require('../assets/img/3.jpg') }],
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
  height: 500px;
  img{
    width:100%;
    height:100%;
  }
}

</style>

