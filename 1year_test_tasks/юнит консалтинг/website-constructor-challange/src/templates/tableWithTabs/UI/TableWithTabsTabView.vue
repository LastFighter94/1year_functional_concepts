<template>
  <!-- вначале выравниваем дивы с группами - в зависимости от значения "alignment" -->
  <!-- наглядный пример в табе "Тест" -->
  <div
        :class="
          activeTabData.alignment === 'vertically' ?
          'table-with-tabs-tab-view-vertically'
          : 'table-with-tabs-tab-view-horizontally'
        "
  >
    <TableWithTabsTabViewGroups
        v-for="groups in activeTabGroupsData"
        :key="groups.ID"
        :groups="groups"
        is-main-group
    />
  </div>
</template>

<script>
import TableWithTabsTabViewGroups from "@/templates/tableWithTabs/UI/TableWithTabsTabViewGroups.vue";
export default {
  components: {
    TableWithTabsTabViewGroups
  },
  computed: {
    activeTabData() {
      return this.$store.getters["table_with_tabs/activeTabData"]
    },
    activeTabGroupsData() {
      return this.$store.getters["table_with_tabs/activeTabGroupsData"]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-with-tabs-tab-view {
  width: 100%;

  &-horizontally {
    display: flex;
    flex-direction: row;
  }

  &-vertically {
    display: flex;
    flex-direction: column;
  }

  &-vertically, &-horizontally {
    width: inherit;
    margin-right: 20px;
    gap: 20px;
  }
}
</style>