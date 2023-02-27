<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div> 
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button
                @click="$router.push(`/posts/${post.id}`)"
            >
                Посмотреть
            </my-button>

            <my-button
                @click="$emit('remove', post)"
            >
                Удалить
            </my-button>
        </div>
    </div>
</template>

<script>
// import MyButton from './UI/MyButton.vue'
// import MyButton from '@/components/UI/MyButton.vue'

export default {
    // components: {MyButton},
    props: {
        post: {
            type: Object,
            requried: true
        }
    }
}
</script>

<style>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post__btns {
    display: flex;
}
</style>

