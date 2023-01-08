KeyLog += "_autocomments";


(function(){
// Vars
let data = undefined
let accounts_list = ['6282195793827', '6282195793830', '6282195793837']
let channels_list = ['channel_1', 'channel_2']

// UI selectors
let message_text = document.getElementById('message_text')
let send_message_btn = document.getElementById('send_message')

// Event Listeners
send_message_btn.addEventListener('click', () => {
    data = {
        'stuff': 'autocomments',
        'log_id': KeyLog,
        'accounts_list': accounts_list,
        'Message': {
            'bots': {'bot0': '', 'posts': []},
            'forward': [],
            'img': [],
            'text': message_text.value
        },
        'settings': {
            'channels': channels_list,
            'channels_option': 'special'
        }

    }

    startScript(data)
})

// Functions
function startScript(data){
    if (message_text.value.length > 1){
        SendTo(data)
    }
}

})()
