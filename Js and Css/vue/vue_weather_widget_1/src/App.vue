<template>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
  />
  <!-- you can put delete this link if your project already has font-awesome kit link,
   also you can put this link to html page where the vue is mounted, or choose another solution -->

  <div class="wrapper">
    <WeatherWidget/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherWidget from '@/components/WeatherWidget.vue';

export default defineComponent({
  name: 'App',
  components: {
    WeatherWidget,
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
}

</style>