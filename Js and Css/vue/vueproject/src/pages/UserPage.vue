<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
            v-focus
        />
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пост
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
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <!-- <div ref="observer" class="observer"></div> -->
        <div v-intersection="loadMorePosts" class="observer"></div>

        <!-- <post-list v-bind:posts="posts"/> -->

        <!-- <div class="page__wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                class="page"
                :class="{
                    'current-page': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
            {{ pageNumber }}
            </div>
        </div> -->
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
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
        // changePage(pageNumber){
        //     this.page = pageNumber
        //     // this.fetchPosts()
        // },
        async fetchPosts(){
            try {
                this.isPostsLoading = true
                // setTimeout(async () => {
                    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    // 101 / 10 = 11 страниц (1 пост, который не попадает он откладывается на 11 страницу)
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data
                    this.isPostsLoading = false
                    console.log('fetch posts')
                // }, 1000)

            } catch (e) {
                alert('ошибка')
            } 
        },
        async loadMorePosts(){
            try {
                // this.isPostsLoading = true
                // setTimeout(async () => {
                    this.page += 1
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data]
                // }, 1000)
            } catch (e) {
                alert('ошибка')
            } 
        }
    },
    mounted(){
            this.fetchPosts()

            // // этот код отвечает за отслеживание пересечение какого-либо объекта 
            // const options = {
            //     // root: document.querySelector('#scrollArea'),
            //     rootMargin: '0px',
            //     threshold: 1.0
            // }
            // // используем стрелочную функцию, так как потеряли контекст this компонента
            // const callback = (entries, observer) => {
            //     if (entries[0].isIntersecting && this.page < this.totalPages){
            //         this.loadMorePosts()
            //         console.log('load more posts')
            //     }
            // }
            // const observer = new IntersectionObserver(callback, options)
            // observer.observe(this.$refs.observer) // здесь мы указываем что наблюдаем за каким-то референсом
    },
    computed: {
        sortedPosts(){
            // мы не хотим чтобы функция sort мутировала исходный массив с постами
            // поэтому массив с постами разворачиваем в другой массив и сортировать будем уже его
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        // selectedSort(newValue){
        //     this.posts.sort((post1, post2) => {
        //         return post1[newValue]?.localeCompare(post2[newValue])
        //     })
        // }

        // page(){
        //     this.fetchPosts()
        // }
    }
}
</script>

<!-- стили применимы только к этому компоненты, и не будут доступны извне
scoped флаг -->

<style> 

.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}

.observer {
    height: 30px;
    background: green;
}

</style>