<template>
  <div>
    <Suspense>
      <AsyncCityView/>

      <template #fallback>
        <AnimatedPlaceholder/>
      </template>
    </Suspense>
  </div>
</template>

<script setup>

import AsyncCityView from "@/components/AsyncCityView.vue";
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>