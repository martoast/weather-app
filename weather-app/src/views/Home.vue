<template>
  <div class="home">
    <div class="row">
      <div class="col-8 offset-2" v-if="forecast">
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3 col-6 offset-3">
          <div class="card-header">Current Weather in {{ forecast.timezone }}</div>
          <div class="card-body">
            <h4 class="card-title">{{ forecast.currently.summary }}</h4>
            <div class="card-text icon-temp">
              <span class="emoji">{{icons[forecast.currently.icon] }}</span>
              {{ forecast.currently.temperature }}°F
            </div>
            <div class="card-text">Chance of rain: {{ forecast.currently.precipProbability }}%</div>
            <div class="card-text">Wind Speed: {{forecast.currently.windSpeed }} mph</div>
            <div class="card-text">Humidity: {{forecast.currently.humidity }} gm⁻³</div>
          </div>
        </div>
        <div>
          <!-- <darksky/> -->
          <emojiMap/>
        </div>
      </div>
    </div>

    <!-- <pre>{{ forecast }}</pre> -->
  </div>
</template>

<script>
// import darksky from "@/components/darksky.js";
import API from "@/lib/API";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      location: "",
      forecast: null,
      icons: {
        "clear-day": "🌞",
        "clear-night": "🌙",
        rain: "🌦",
        snow: " 🌨",
        sleet: "🌧",
        wind: " 🌬",
        fog: "🌫",
        cloudy: "🌥",
        "partly-cloudy-day": "🌤",
        "partly-cloudy-night": "🌌"
      }
    };
  },
  mounted() {
    this.loadWeather("37.8267", "-122.4233");
  },
  methods: {
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
        console.log(result);
        this.loadWeather(result.latitude, result.longitude);
      });
    },
    loadWeather(lat, lng) {
      API.getForecast(lat, lng).then(result => {
        console.log(result);
        this.forecast = result;
      });
    }
  },
  components: {
    // darksky
  }
};
</script>
<style>
/* body {
  font-size: 2em;
} */
.icon-temp {
  font-size: 2em;
}
.emoji {
  font-size: 2em;
}
</style>
