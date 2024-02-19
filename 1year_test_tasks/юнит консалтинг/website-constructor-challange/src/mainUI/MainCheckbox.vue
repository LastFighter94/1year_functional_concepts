<template>
  <div>
    {{data.name_ru}} <input type="checkbox"/>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>