const os = require('os')
const cluster = require('cluster') // модуль для того чтобы одно-поточный js использовал все возможности многоядерных систем

if (cluster.isMaster){ // проверка на то - является ли процесс главным
    for (let i = 0; i < (os.cpus()).length - 2; i++){
        cluster.fork() // для каждого ядра мы будем запускать процесс
    }
    cluster.on('exit', (worker, code, signal) => { // listen to event "exit"
        console.log(`Worker with pid ${worker.process.pid} died`) // if type "kill pid" in terminal
        // if (code === ){
        //     cluster.fork()
        // } else {
        //     console.log('Worker died...')
        // }

    })
} else { // отработает когда будут запускаться дочерние процессы
    console.log(`Worker with id ${process.pid} is on`)

    setInterval(() => {
        console.log(`Worker with pid ${process.pid} still works`)
    }, 5000)
}

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
//
// const cpus = os.cpus()

// for (let i = 0; i < cpus.length - 2; i++){
//     const CPUcore = cpus[i]
//     console.log('Запустить еще один процесс nodejs')
// }

// console.log(process.pid)