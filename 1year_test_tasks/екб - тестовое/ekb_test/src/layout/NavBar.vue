<template>
  <div class="navbar p-3 d-flex justify-content-between">
    <div class="d-flex justify-content-between align-items-center">
      <i class="fa-solid fa-bars emblem"></i>

      <div class="search-bar">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search">
      </div>
    </div>

    <i class="fa-solid fa-bars notifications p-2 rounded-circle bg-white border border-white"></i>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--main-color);
  height: var(--navbar-height);

  .emblem {
    font-size: 2rem;
  }

  .search-bar {
    border: 1px solid var(--border-main-color);
    border-radius: 15px;
    margin-left: 10px;
    padding: 5px;

    input {
      background-color: transparent;
      width: 300px;
      border: 0;
      outline: none;
    }
  }
}

</style>