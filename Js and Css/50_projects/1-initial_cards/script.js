const panels = document.querySelectorAll('.panel')

// console.log(panels); // prints nodelist

panels.forEach(panel => {
    // console.log(panel);
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // console.log(123);
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}