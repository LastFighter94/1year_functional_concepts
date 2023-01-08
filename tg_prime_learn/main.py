import os
import eel
from helpers.eel_functions import *

eel.init(f'{os.getcwd()}//additives')
eel.start('web/index.html', host='localhost', port=8000, jinja_templates="web")
