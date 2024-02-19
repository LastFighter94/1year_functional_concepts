<template>
  <div>
    {{data.name_ru}}
    <select name="select">
      <option value="value1" selected>Значение 1</option>
      <option value="value2">Значение 2</option>
      <option value="value3">Значение 3</option>
    </select>
    <br>
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