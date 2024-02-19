<template>
    <TableWithTabsLayer
        v-if="this.$store.state.templatesVisibility.table_with_tabs"
    />
</template>

<script>
import TableWithTabsLayer from "@/templates/tableWithTabs/UI/TableWithTabsLayer.vue";
export default {
  props: {
    templateType: {
      required: true,
      type: String
    },
    data: {
      required: true,
      type: Object
    }
  },
  components: {TableWithTabsLayer},
  created() {
    // чтобы не зависить от props drilling подхода
    // также избавляемся от if (templateType === '...') {...} - шаблонные литералы делают все за нас,
    // главное в template store такое же название (this.templateType) указать, чтобы потом его импортировать
    this.$store.commit(`${this.templateType}/setData`, this.data)
    // ставим состояние отображения шаблона в true
    this.$store.commit('renderTemplate', this.templateType)
  }
}
</script>