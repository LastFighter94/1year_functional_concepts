import eel
from universal_controller import controller as dataController


@eel.expose
def hello_from_py(text):
    if text is None:
        raise Exception()
    return text


@eel.expose
def js_from_py():
    eel.js_from_py('calling Js from Py!')
    print('hello python!!!')


##################################################### end of example code
@eel.expose
def SendMessageServer(*args) -> None:
    myArgs = args[0]
    dataController(myArgs)


