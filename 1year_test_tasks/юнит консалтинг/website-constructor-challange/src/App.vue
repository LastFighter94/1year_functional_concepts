<template>
<!-- представим что уже есть backend и с сервера, на момент created() пришел ответ в виде импортированного нами объекта data из data.js -->
  <div id="app">
    <DataToWeb
        v-if="dataChecked"
        :template-type="this.templateType"
        :data="data"
    />
  </div>
</template>

<script>
import {table_with_tabs} from "@/templates/tableWithTabs/schema/data";
import DataToWeb from "@/DataToWeb.vue";

export default {
  name: 'App',
  components: {DataToWeb},
  data(){
    return {
      data: null,
      dataChecked: false,
      templateType: undefined
    }
  },
  created() {
    // псевдо код запроса, не забываем "отловить" ошибку
    this.data = table_with_tabs

    // проверка структуры данных на соответствие типам или что-либо еще
    this.checkSchema(this.data)

    // далее, в зависимости от полученных данных мы создаем визуальный шаблон web страницы
    this.transformToWeb(this.data)
  },
  methods: {
    checkSchema(data){
      // для каждой схемы выделить типы, то есть - если будет шаблон "Лэндинга"
      // указывать его в data.js (json), парсить файл и проверять нет ли
      // ошибок, чтобы потом все не полетело

      // "schema": "table_with_tabs"
      // можно делать это на стороне backend
      // test-table.ts (export interface test-table)
      console.log('schema checked', data)

      this.dataChecked = true // else, false
    },
    transformToWeb(data){
      // делаем изначальную проверку на тип шаблона (таблица, форма и так далее), чтобы можно было
      // переиспльзовать функционал, а не работать только с таблицей
      // "data_template_type": "form" || "navbar" || и так далее

      // "table_name" - в нашем случае будем отталкиваться от значения этого ключа
      if (data.table_name === 'xx_dt_test'){
        this.templateType = this.$store.state.templateTypes.table_with_tabs
      } else {
        this.templateType = 'data_template_type'
      }
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: $mainColor;
}
</style>
