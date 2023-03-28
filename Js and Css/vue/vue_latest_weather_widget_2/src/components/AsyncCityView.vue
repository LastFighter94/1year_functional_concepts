<template>
  <div class="container flex flex-col flex-1 items-center">
    <!-- Banner -->
    <div
        v-if="route.query.preview"
        class="text-white p-4 bg-weather-secondary w-full text-center"
    >
      <p>
        You are currently previewing this city, click the "+"
        icon to start tracking this city.
      </p>
    </div>

    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ route.params.city }}</h1>
      <p class="text-sm mb-12">{{data}}</p>

      <hr class="border-white border-opacity-10 border w-full" />
    </div>

<!--    Здесь создаем компонент CityCard чтобы не засорять template -->

  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import {openWeatherApi} from "@/constants/openWeatherApi";
import {ref} from "vue";

const data = ref(null)
const route = useRoute();

const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
        `${openWeatherApi.url_base}weather?q=${route.params.city}&units=metric&APPID=${openWeatherApi.api_key}`
    );
    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};

data.value = await getWeatherData();

</script>