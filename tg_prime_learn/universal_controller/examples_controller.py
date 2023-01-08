from helpers.get_session import get_session
from telethon import TelegramClient, functions, events


def examples(data) -> None:
    accounts_list = data['accounts_list']
    msg = data['message']

    accountInfo = get_session(accounts_list[0])
    print(accountInfo)

    clonner_v2 = False  # в примере нет необходимости
    phone = accountInfo['session_file']
    apiId = accountInfo['app_id']
    apiHash = accountInfo['app_hash']
    device = str(accountInfo['device'])
    sdk = str(accountInfo['sdk'])
    app_version = str(accountInfo['app_version'])
    link = 'NO_LINK'  # в примере нет необходимости

    proxy_ = (3, 'gate.smartproxy.com', 7000, True, 'sp07508161', 'spjhlxcy07508161')

    ipv6 = False
    lang = 'ru'
    sys_lang = 'ru-ru'
    sessionpath = f"sessions/{phone}"

    client = TelegramClient(f'{sessionpath}', apiId, apiHash, use_ipv6=ipv6, device_model=device,
                            system_version=sdk, app_version=app_version, proxy=proxy_, request_retries=10,
                            timeout=20, connection_retries=3, retry_delay=15, auto_reconnect=True,
                            lang_code=lang, system_lang_code=sys_lang)

    # https://docs.telethon.dev/en/stable/basic/quick-start.html
    ############################ пример 1

    async def main():
        # # Getting information about yourself
        # me = await client.get_me()
        # print(me.phone)
        # print(me.stringify())

        # # Sending message
        # await client.send_message(entity='@yka94test', message=msg)

        # задача - вызвать функцию send_message - n количество раз

        await client.send_message(entity='@yka94', message=msg)
        await client.send_message(entity='@yka94', message=msg)
        await client.send_message(entity='@yka94', message=msg)






        # await client.send_message(entity='@sem_smm', message=msg)
        # await client.send_message(entity='@sem_smm', message=msg)
        # await client.send_message(entity='@sem_smm', message=msg)
        # await client.send_message(entity='@sem_smm', message=msg)
        # await client.send_message(entity='@sem_smm', message=msg)

        # # Printing dialogs
        # async for dialog in client.iter_dialogs():
        #     print(dialog.name, 'has ID', dialog.id)

        # # Sending message with file, link and bold, italic style or just msg
        # message = await client.send_message(
        #     entity='@yka94',
        #     message='This message has **bold**, `code`, __italics__ and a '
        #     '[nice website](https://images.theconversation.com/files/156529/original/image-20170213-23331'
        #             '-vsydk4.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip)!',
        #     file='https://images.theconversation.com/files/156529/original/image-20170213-23331-vsydk4.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
        #     link_preview=False
        # )

        # # print message raw_text
        # print(message.raw_text)

        # # Reply to your own message
        # await message.reply('Ну прикольно же?)')

        # # Another functional
        # async for message in client.iter_messages('@yka94'):
        #     print(message.id, message.text)
        #     if message.photo:
        #         path = await message.download_media()
        #         print('File saved to', path)  # printed after download is done

    with client:
        client.loop.run_until_complete(main())

    # # https://docs.telethon.dev/en/stable/
    ############################ пример 2

    # with client:
    #    print(client.download_profile_photo('@yka94'))
    #
    #    @client.on(events.NewMessage(pattern='(?i).*Hello'))
    #    async def handler(event):
    #       await event.reply('Hey!')
    #
    #    client.run_until_disconnected()

    ############################ пример 3

    # with TelegramClient(f'{sessionpath}', apiId, apiHash, use_ipv6=ipv6, device_model=device,
    #                                  system_version=sdk, app_version=app_version, proxy=proxy_, request_retries=10,
    #                                  timeout=20, connection_retries=3, retry_delay=15, auto_reconnect=True,
    #                                  lang_code=lang, system_lang_code=sys_lang) as client:
    #     client.loop.run_until_complete(client.send_message(entity='@yka94', message='привет от Юрца'))
    #     client.loop.run_until_complete(client.send_message(entity='@yka94', message='привет от Юрца 2'))
    #     client.loop.run_until_complete(client.send_message(entity='@yka94', message='привет от Юрца 3'))
