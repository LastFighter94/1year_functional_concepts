<template>
  <NavBar/>
  <div class="main d-flex flex-row">
    <SideBar/>
    <Content/>
  </div>
</template>

<script setup>

import NavBar from "./layout/NavBar.vue";
import SideBar from "./layout/sidebar/SideBar.vue";
import Content from "./layout/content/Content.vue";
</script>
