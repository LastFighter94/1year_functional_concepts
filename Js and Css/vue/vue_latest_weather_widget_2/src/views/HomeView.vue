<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
          type="text"
          v-model="searchQuery"
          @input="getSearchResults"
          placeholder="Search for a city or state"
          class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
      <ul
          class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
          v-if="mapboxSearchResults"
      >
        <p v-if="searchError">Sorry, something went wrong, please try again</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0">No results match your query, try a different term</p>
        <template v-else>
          <li
              v-for="searchResult in mapboxSearchResults"
              :key="searchResult.id"
              class="py-2 cursor-pointer"
              @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import router from "@/router";

import {getSearchResults} from "@/querys/getSearchResults";

const previewCity = (searchResult) => {
  const city = searchResult.place_name.split(",")[0]
  console.log(city)
  router.push({
    name: 'cityView',
    params: {city: city.replaceAll(" ", "")},
    query: {
      lat: searchResult.geometry.coordinates[1],
      lon: searchResult.geometry.coordinates[0],
      preview: true
    }
  })
}

const {searchQuery, mapboxSearchResults, searchError} = getSearchResults()

</script>

<style lang="scss" scoped></style>