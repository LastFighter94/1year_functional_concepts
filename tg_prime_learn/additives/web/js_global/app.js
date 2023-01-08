var KeyLog = eel.guid();

async function SendTo(data) {
    data["logId"] = KeyLog
    await eel.SendMessageServer(data)()
}