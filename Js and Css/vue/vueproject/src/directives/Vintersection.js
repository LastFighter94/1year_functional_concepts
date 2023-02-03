export default {
    mounted(el, binding){
        console.log(el, binding)
        const options = {
            // root: document.querySelector('#scrollArea'),
            rootMargin: '0px',
            threshold: 1.0
        }
        // используем стрелочную функцию, так как потеряли контекст this компонента
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting){
                binding.value()
                console.log('load more posts')
            }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(el)
    },
    name: 'intersection'
}