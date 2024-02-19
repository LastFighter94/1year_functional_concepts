<template>
  <div class="table-with-tabs-tabs">
    <div>
      <!-- желательно придумать другую индексацию, потому что при удалении таба, все может "съехать" -->
      <p
          :class="activeTabIdx === idx ? 'active' : ''"
          v-for="(tab, idx) in this.tabs"
          :key="tab.tab_name"
          @click="changeActiveTab(idx)"
      >
        {{tab.tab_name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeTabIdx(){
      return this.$store.state.table_with_tabs.activeTabIdx
    },
    tabs(){
      return this.$store.state.table_with_tabs.data.tabs
    }
  },
  methods: {
    changeActiveTab(tabIdx){
      this.$store.commit('table_with_tabs/setActiveTabIdx', tabIdx)
    }
  }
}
</script>

<style lang="scss">
.table-with-tabs-tabs {
  min-width: 200px;
  word-break: break-all;

  > div {
    box-shadow: 10px 20px 10px rgba(148, 148, 148, 0.35);
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
    background: $mainLightColor;
    border: 2px;
  }

  p {
    display: block;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }

  .active {
    background: $mainColor;
    border-right: 4px solid blue;
  }
}

</style>