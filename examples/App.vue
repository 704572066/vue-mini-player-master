<template>
  <div id="app">
    <a href=""
       target="_blank"
       class="github-corner">
      <svg width="80"
           height="80"
           viewBox="0 0 250 250"
           style="fill:#41b883; color:#35495e">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style="transform-origin: 130px 106px;"
              class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              class="octo-body"></path>
      </svg>
    </a>
    <header class="header">
      <h2>随到随玩科技文化有限公司</h2>
      <p>更好地表达出自己的想法，重新定义社交方式</p>
    </header>
    <!-- <section class="main">
      <QunVideo url="http://vjs.zencdn.net/v/oceans.mp4" />
    </section>
    <section class="main">
      <QunVideo url="/video/2.mp4" />
    </section>
    <section class="main">
      <QunVideo url="http://vjs.zencdn.net/v/oceans.mp4" />
    </section> -->
    <section class="main">
      <table cellpadding="0" cellspacing="0" border="0" id="app">
      <tr>
        <td class="toollab" v-for="(item,index) in links" :key="index" :style="{width:100/links.length+'%'}">
          <router-link class="toollabtext" :to="item.to">{{item.name}}</router-link>
        </td>
      </tr>
      <tr><td :colspan="links.length">
        <div style="height: 100%;position: relative">
          <transition  :name="transitionName">
            <!--          <keep-alive>-->
            <router-view class="page"></router-view>
            <!--          </keep-alive>-->
          </transition>
        </div>
      </td></tr>
    </table>
    </section>
    <!-- <section class="main">
      <Img />
    </section>
    <section class="main">
      <QunVideo />
    </section> -->
    <!-- <PageSlide indexPagePath="/home">
      <router-view />
    </PageSlide> -->
  </div>
</template>

<script>
// import QunVideo from './components/QunVideo.vue';
// import Img from './components/Img.vue';
// import TextShow from './components/TextShow.vue';
// import VideoJS from './components/VideoJS.vue';
// import PageSlide from '@/components/PageSlide'
export default {
  name: 'app',
  data() {
    return {
      links: [
        { to: '/page1', name: '青铜' },
        { to: '/page2', name: '星耀' },
        { to: '/page3', name: '荣耀' }
      ],
      transitionName: ''
    }
  },
  watch: {
    $route(to) {
      this.transitionName = to.meta.anim;
    }
  },
  components: {
    // QunVideo,
    // Img
  }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    padding-top: 20px;
    overflow: hidden;
    width: 100%;
    height: 150px;
    color: #fff;
    background-color: #159957;
    background-image: linear-gradient(120deg, #1b9fd4, #159957);
  }
  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
}




.toollab{
  width: 50%;
  background: white;
  height: 50px;
  text-align: center;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in;
}
.toollab:hover{
  background-color: #bd91f5;
}
.toollabtext{
  width: 100%;
  height: 100%;
  text-decoration: none;
  color:black;
  font-weight: bold;
  font-size: 20px;

}
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.left-enter,.left-enter-active,.left-leave-active,.left-leave-to,
.right-enter,.right-enter-active,.right-leave-active,.right-leave-to{
  position: absolute;
}
.left-enter-active,.left-leave-active,.right-enter-active,.right-leave-active{
  will-change: transform;
  transition: all 1s ease;
}
.left-enter{
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.left-enter-active{
}
.left-leave-active{
  transform: translate3d(100%, 0, 0);
}
.left-leave-to{
  opacity: 0;
}
.right-enter {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.right-enter-active{
}
.right-leave-active{
  transform: translate3d(-100%, 0, 0);
}
.right-leave-to{
  opacity: 0;
}
</style>
