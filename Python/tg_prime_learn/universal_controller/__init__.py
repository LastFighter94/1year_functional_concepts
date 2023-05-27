from .examples_controller import examples
from .autocomments_controller import autocomments

datacontext = {
    'examples': examples,
    'autocomments': autocomments,
}


def controller(data):
    if datacontext.get(data['stuff']) is not None:
        return datacontext.get(data['stuff'])(data)
    else:
        print('STUFF - IS NONE!')
        raise Exception()
