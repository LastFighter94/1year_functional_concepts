import axios from "axios";
import {ref} from "vue";

const mapboxAPIKey = "pk.eyJ1IjoibGFzdGZpZ2h0ZXI5NCIsImEiOiJjbGVzNzBhYnkxM2gwNDFvMWh5cGVib2U5In0.vhcmtXMGcY2KNoVPDnoOtQ";
let queryTimeout = null

const searchQuery = ref("");
const mapboxSearchResults = ref(null);
const searchError = ref(null)

// const getSearchResults = async () => { // вариант без debounce
export const getSearchResults =  () => {
  clearTimeout(queryTimeout);
  queryTimeout = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
      } catch (e) {
        searchError.value = true
      }
      return;
    }
    // else { // вариант без debounce
    //   mapboxSearchResults.value = null;
    // }
    mapboxSearchResults.value = null;
  }, 300);

  return {searchQuery, mapboxSearchResults, searchError}
};