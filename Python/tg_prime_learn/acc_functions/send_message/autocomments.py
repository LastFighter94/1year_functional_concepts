from threading import Thread
from helpers.get_session import get_session
from telethon import TelegramClient, functions, events
from acc_functions.send_message.message_send_parent import MessageSenderParent


class Autocomment(MessageSenderParent, Thread):
    def __init__(self, account: list, logId: str = None, thread_num: int = 0, additiveData: dict = None) -> None:
        Thread.__init__(self)

        print('***********************************')

        self.channels = additiveData["settings"]["channels"]
        self.channels_option = additiveData["settings"]["channels_option"]

    def run(self):
        self.test_method()

    def test_method(self):
        print('test1')
        print('test2')
        print('test3')

    # accounts_list = data['accounts_list']
    # msg = data['Message']['text']
    #
    # accountInfo = get_session(accounts_list[0])
    # print(accountInfo)
    #
    # clonner_v2 = False  # в примере нет необходимости
    # phone = accountInfo['session_file']
    # apiId = accountInfo['app_id']
    # apiHash = accountInfo['app_hash']
    # device = str(accountInfo['device'])
    # sdk = str(accountInfo['sdk'])
    # app_version = str(accountInfo['app_version'])
    # link = 'NO_LINK'  # в примере нет необходимости
    #
    # proxy_ = (3, 'gate.smartproxy.com', 7000, True, 'sp07508161', 'spjhlxcy07508161')
    #
    # ipv6 = False
    # lang = 'ru'
    # sys_lang = 'ru-ru'
    # sessionpath = f"sessions/{phone}"
    #
    # client = TelegramClient(f'{sessionpath}', apiId, apiHash, use_ipv6=ipv6, device_model=device,
    #                         system_version=sdk, app_version=app_version, proxy=proxy_, request_retries=10,
    #                         timeout=20, connection_retries=3, retry_delay=15, auto_reconnect=True,
    #                         lang_code=lang, system_lang_code=sys_lang)
    #
    # async def main():
    #     await client.send_message(entity='@yka94', message=msg)
    #
    # with client:
    #     client.loop.run_until_complete(main())