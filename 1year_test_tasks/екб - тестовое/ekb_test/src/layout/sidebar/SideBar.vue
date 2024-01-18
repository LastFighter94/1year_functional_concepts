<template>
  <div class="sidebar d-flex flex-column">
    <div class="accordion flex-column mb-auto">

      <EmptyItem icon="fa-solid fa-star" :item="overView" active-item/>

      <AccordionItems icon="fa-solid fa-bars" items="Pages" :pages="pagesOne"/>
      <AccordionItems icon="fa-solid fa-user" items="Pages Two" :pages="pagesTwo"/>

      <EmptyItem icon="fa-solid fa-message" :item="message" msg-counter="1"/>
      <EmptyItem icon="fa-solid fa-cloud" :item="emptyItem"/>
    </div>

    <div class="bottom-items">
      ICONS
    </div>
  </div>
</template>

<script setup>
import EmptyItem from "./EmptyItem.vue";
import AccordionItems from "./AccordionItems.vue";

// есть способ сделать это без пяти строк, в одну
import {pagesOne} from '../../utils/sidebarRoutes.js'
import {pagesTwo} from '../../utils/sidebarRoutes.js'

import {overView} from '../../utils/sidebarRoutes.js'
import {emptyItem} from '../../utils/sidebarRoutes.js'
import {message} from '../../utils/sidebarRoutes.js'
</script>

<style lang="scss">
.sidebar {
  background-color: #ffffff;
  border-right: 1px solid var(--border-main-color);
  min-width: 240px;
}

</style>