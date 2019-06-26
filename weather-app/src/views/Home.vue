<template>
  <div class="home">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card text-white bg-secondary mb-3 col-6 offset-3">
          <div class="card-header">Current Weather in {{ forecast.timezone }}</div>
          <div class="card-body">
            <h4 class="card-title">{{ forecast.currently.summary }}</h4>
            <div class="card-text">{{ forecast.currently.icon }} {{ forecast.currently.temperature }} °F</div>
            <div class="card-text">Chance of rain: {{ forecast.currently.precipProbability }}</div>

          </div>
        </div>
      </div>

    </div>

    <pre>{{ forecast }}</pre>
  </div>
</template>

<script>
import API from "@/lib/API";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      forecast: {}
    };
  },
  mounted() {
    API.getForecast().then(result => {
      console.log(result);
      this.forecast = result;
    });
  },
  components: {
    HelloWorld
  }
};
</script>
