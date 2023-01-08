// first
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 2
let currentActive = 1

console.log(circles);

// 3
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    // console.log(currentActive);

    // 5
    update()

})

// 4
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    // 5
    update()

    // console.log(currentActive);
    
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            // console.log(idx, currentActive)
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // 6
    const actives = document.querySelectorAll('.active')

    // 8
    // console.log((actives.length / circles.length) * 100)

    // 7
    // console.log(actives.length, circles.length)

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}