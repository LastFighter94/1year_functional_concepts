<template>
  <div :class="isMainGroup ? 'main-group' : 'groups'">
    <div
        v-if="groups['groups']"
        :class="recursiveClass"
    >
      <TableWithTabsTabViewGroups
          v-for="groups in groups['groups']"
          :key="groups.ID"
          :groups="groups"
          :is-main-group="false"
      />

    <!-- {{groups['groupType']}} если у группы есть тип, то пишем groupType вместо Type -->

    <!-- {{groups['groupType']}} -->

    </div>

    <div
        class="group-item"
        v-else
    >
      <!-- делаем рендер компонентов из MainUI каким-нибудь элегантным способом
      в зависимости от вложенного типа "checkbox, select, text, table",
      остается мало времени поэтому пока делаю текущий вариант -->
      <MainUIRender :type="groups['type']" :infoProps="groups"/>
    </div>

  </div>
</template>

<script>
import TableWithTabsTabViewGroups from "@/templates/tableWithTabs/UI/TableWithTabsTabViewGroups.vue";
import MainUIRender from "@/utils/wrapperComponents/MainUIRender.vue";
export default {
  name: 'TableWithTabsTabViewGroups',
  components: {
    MainUIRender,
    TableWithTabsTabViewGroups
  },
  props: {
    groups: {
      required: true
    },
    isMainGroup: {
      required: false,
      type: Boolean
    }
  },
  computed: {
    // класс, для того чтобы отделить "группы с элементами" от "групп с элементом"
    recursiveClass(){
      let res

      if (this.groups['alignment'] === 'vertically'){
        res = 'groups-vertically'
      } else {
        res = 'groups-horizontally'
      }

      if (this.isMainGroup){
        res+='-main-group'
      }

      return res
    }
  }
}
</script>

<style lang="scss">
.main-group {
  width: 100%;
}

.groups-vertically-main-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.groups-horizontally-main-group {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.groups {
  width: 100%;
  height: fit-content;

  &-vertically {
    display: flex;
    flex-direction: column;
  }

  &-horizontally {
    display: flex;
    flex-direction: row;
  }
}

.group-item {
  background-color: $mainLightColor;
  padding: 10px;
}
</style>
