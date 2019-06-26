const proxy = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = '27c7a725dbf5182786d34075dd38f037/'
const location = '37.8267,-122.4233'
const API_URL =
  `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`

function getForecast() {
  console.log(API_URL)
  return fetch(API_URL)
    .then(response => response.json())

}

export default {
  getForecast
}
