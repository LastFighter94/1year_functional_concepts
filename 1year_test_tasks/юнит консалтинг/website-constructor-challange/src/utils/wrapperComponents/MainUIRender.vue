<template>
  <div>
    <MainInput v-if="type === 'text'" :data="infoProps"/>
    <MainSelect v-if="type === 'select'" :data="infoProps"/>
    <MainCheckbox v-if="type === 'checkbox'" :data="infoProps"/>
  </div>
</template>

<script>
// 100% есть более элегантный способ сделать импорт нескольких компонентов

import MainInput from "@/mainUI/MainInput.vue";
import MainSelect from "@/mainUI/MainSelect.vue";
import MainCheckbox from "@/mainUI/MainCheckbox.vue";
export default {
  components: {
    MainInput,
    MainSelect,
    MainCheckbox
  },
  props: {
    type: {
      required: true,
      type: String
    },
    infoProps: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>