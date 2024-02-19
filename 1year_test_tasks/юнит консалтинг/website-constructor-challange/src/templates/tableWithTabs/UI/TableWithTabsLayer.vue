<template>
  <div class="table-with-tabs-layer">
    <TableWithTabsTabs/>
    <TableWithTabsTabView/>
  </div>
</template>

<script>
import TableWithTabsTabs from "@/templates/tableWithTabs/UI/TableWithTabsTabs.vue";
import TableWithTabsTabView from "@/templates/tableWithTabs/UI/TableWithTabsTabView.vue";
export default {
  components: {
    TableWithTabsTabs,
    TableWithTabsTabView
  }
}
</script>

<style lang="scss">
.table-with-tabs-layer {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
}

.table-with-tabs-layer > div {
  margin-left: 20px;
}
</style>