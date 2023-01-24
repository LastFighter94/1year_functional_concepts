<template>
    <div class="app">
        <post-form
            @create="createPost"
        />
        <post-list
            :posts="posts"
        />
        <!-- <post-list v-bind:posts="posts"/> -->
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
// import PostForm from './components/PostForm.vue';
// import PostList from './components/PostList.vue';

export default {
    components: {
        PostForm,
        PostList
    },
    data(){
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание поста'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
                {id: 4, title: 'JavaScript 4', body: 'Описание поста 4'},
            ]
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post)
        }
    }
}
</script>

<!-- стили применимы только к этому компоненты, и не будут доступны извне
scoped флаг -->

<style> 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

</style>