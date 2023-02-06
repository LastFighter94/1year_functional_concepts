import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI' // здесь импортируем массив из UI/index.js
import directives from '@/directives' // здесь импортируем массив из directives/index.js
import router from '@/router/router'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
// глобальный импорт компонентов

directives.forEach(directive => {
    app.directive(directive.name, directive)
})
// глобальный импорт директив

app
    .use(router)
    .use(store)
    .mount('#app')
