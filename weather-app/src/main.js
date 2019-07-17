import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
Vue.component('emojiMap', {
  render() {
    // h will be injected
    return (
      <iframe
        id="map-embed-iframe"
        frameborder="0"
        height="500px"
        width="100%"
        src='https://maps.darksky.net/@emoji,40.380,-41.396,4?domain="+encodeURIComponent(window.location.href)+"&amp;auth=1563400468_bbc1159d8c477105a45d7587b0e7e012&amp;embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji'
      />
    );
  },
});
