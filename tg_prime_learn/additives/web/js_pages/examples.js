KeyLog += "_examples";

(function(){
    
// Vars
let data = undefined
let accounts_list = ['6282195793827', '6282195793830', '6282195793837']

// UI selectors
let p_log = document.getElementById('log')
let btn_hello = document.getElementById('hello')
let btn_start_2 = document.getElementById('start_2')
let message_text = document.getElementById('message_text')
let send_message_btn = document.getElementById('send_message')

// Event Listeners
btn_hello.addEventListener('click', async () => {
    // await hello_from_py() - Example Two
    p_log.innerHTML = await eel.hello_from_py('hello from py')()
    p_log_styling()
})

btn_start_2.addEventListener('click', async () => {
    await eel.js_from_py()()
})

send_message_btn.addEventListener('click', () => {
    data = {
        'stuff': 'examples', // делаем вызов функции из контроллера функций universal_controller
        'log_id': KeyLog,
        'accounts_list': accounts_list,
        'message': message_text.value
    }

    startScript(data)
})

// Functions
function p_log_styling(err = false){
    p_log.style.padding = '20px'

    if (err){
        p_log.style.backgroundColor = 'red'
    }
}

function startScript(data){
    if (message_text.value.length < 1){
        p_log.innerHTML = 'Введите сообщение!'
        p_log_styling(true)
        return
    } else {
        SendTo(data)
    }
}

// Call Python From Js - Example Two
// async function hello_from_py(){
//     let result = await eel.hello_from_py('some text')()
//     p_log.innerHTML = result
// }

eel.expose(js_from_py)
function js_from_py(text) {
    p_log.innerHTML = text
    p_log_styling()
    console.log('testing Js logging')
}

})()