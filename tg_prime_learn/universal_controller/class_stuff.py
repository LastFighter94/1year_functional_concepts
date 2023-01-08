from acc_functions.send_message.autocomments import Autocomment


WORK = {
    'autocomments': Autocomment
}


def get_class(key):
    return WORK[key]
