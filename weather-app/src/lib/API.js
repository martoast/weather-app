const proxy = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = '27c7a725dbf5182786d34075dd38f037/'
const location = '37.8267,-122.4233'
const WHEATER_API_URL =
  `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`
const GEO_API_URL = `${proxy}https://darksky.net/geo/?q=`


function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then((response => response.json()))


}

function getForecast(location) {
  console.log(WHEATER_API_URL)
  return fetch(WHEATER_API_URL)
    .then(response => response.json())

}

export default {
  getForecast,
  getCoordinates
}
