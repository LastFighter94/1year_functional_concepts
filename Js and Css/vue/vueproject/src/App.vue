<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пользователя
            </my-button>

            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <!-- <input type="text" v-model.trim="modificatorValue"> -->
        <!-- модификаторы есть еще - number,  -->
        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list
            :posts="posts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <!-- <post-list v-bind:posts="posts"/> -->
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
// import PostForm from './components/PostForm.vue';
// import PostList from './components/PostList.vue';

import axios from 'axios'

export default {
    components: {
        PostForm,
        PostList
    },
    data(){
        return {
            posts: [],
            dialogVisible: false,
            modificatorValue: '',
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
            ]
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
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    this.posts = response.data
                    this.isPostsLoading = false
                }, 1000)

             } catch (e) {
                alert('ошибка')
            } finally {
                // this.isPostsLoading = false
            }
        }
    },
    mounted(){
            this.fetchPosts()
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

.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

</style>