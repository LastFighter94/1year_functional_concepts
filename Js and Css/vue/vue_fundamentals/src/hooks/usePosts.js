import axios from "axios"
import {ref, onMounted, computed, watch} from 'vue'

export function usePosts(limit) {
    // объявили данные
    const posts = ref([])
    const totalPages = ref(0)
    const isPostsLoading = ref(true)

    // объявление переменных и логика по работе с ними находится в одном месте

    // сделали функцию, которая подгружает посты с сервера
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: limit
                }
            })
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data
            console.log('fetch posts')
        } catch (e) {
            console.log(e)
        } finally {
            isPostsLoading.value = false
        }
    }

    // также здесь, внутри этого хука usePosts
    // мы можем использовать различные lifeCicle методы
    // а также вычисляемые и наблдюдаемые свойства
    onMounted(fetching) // когда компонент будет вмонтирован, сразу выполнится функция по загрузке постов с сервера
    // onCreated()
    // computed()
    // watch()

    // по итогу возрашаем реактивные переменные
    return {
        posts, isPostsLoading, totalPages
    }
}