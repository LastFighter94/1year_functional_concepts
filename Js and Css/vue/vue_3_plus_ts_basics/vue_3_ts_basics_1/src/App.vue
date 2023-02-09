<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="@/assets/heart.svg" alt="site logo">
        <h1>Super Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue';
import Job from '@/types/job'
import JobList from '@/components/JobsList.vue'
import OrderTerm from '@/types/orderterm'

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup(){
    const jobs = ref<Job[]>([
      { title: 'farmworker', location: 'lol lon ranch', salary: 30000, id: '1'},
      { title: 'president', location: 'administration house', salary: 1500000, id: '2'},
      { title: 'popular singer', location: 'everywhere', salary: 250000, id: '3'},
      { title: 'bookworker', location: 'library', salary: 60000, id: '4'},
      { title: 'workworker', location: 'work', salary: 350000, id: '5'},
    ])
    const order = ref<OrderTerm>('title') 
    // local state - to keep track of the order that we choose
    // title, location or salary
    // initial value is "title"

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order }
  }
});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title{
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
