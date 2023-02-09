<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">oh shit! {{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts"/>
    </div>
    <div v-else>
      Loading...
    </div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import { ref } from 'vue'
import getPosts from '@/composables/getPosts'

export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup(){
    const {posts, error, load} = getPosts()

    load()

    const showPosts = ref(true)

    return { posts, showPosts, error }
  },
  mounted(){
    console.log('mounted using options API')
  }
}
</script>