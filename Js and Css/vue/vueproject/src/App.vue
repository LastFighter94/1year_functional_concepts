<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button
            @click="showDialog"
        >
            Создать пользователя
        </my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list
            :posts="posts"
            @remove="removePost"
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
            ],
            dialogVisible: false
        }
    },
    methods: {
        createPost(post){
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog(){
            this.dialogVisible = true
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