from universal_controller.class_stuff import get_class
from universal_controller.thread_controller import TC as ThreadsController
import threading


def autocomments(data):
    def execute(data, logId):
        account_list = data['accounts_list']

        for x in range(len(account_list)):
            ThreadsController.add_thread_target(logId, get_class(data['stuff'])(
                account=account_list[x], logId=logId, additiveData=data, thread_num=x))

        ThreadsController.wait_all_threads(logId)
        ThreadsController.delete_by_logId(logId)

    logId = data['logId']
    threading.Thread(target=execute, args=(data, logId,)).start()
