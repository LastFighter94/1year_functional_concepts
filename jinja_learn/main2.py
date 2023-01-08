# https://www.youtube.com/watch?v=1Dsy2dKNP3Y&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=4

from jinja2 import Environment, FileSystemLoader, FunctionLoader

persons = [
    {"name": "Алексей", "old": 18, "weight": 78.5},
    {"name": "Николай", "old": 28, "weight": 82.3},
    {"name": "Иван", "old": 38, "weight": 94.0},
]


def loadTpl(path):
    if path == "index":
        return '''Имя {{u.name}}, возраст {{u.old}}'''
    else:
        return '''Данные: {{u}}'''


file_loader = FileSystemLoader('templates_example_1')
# file_loader = FunctionLoader(loadTpl)
env = Environment(loader=file_loader)

tm = env.get_template('main.html')
msg = tm.render(users=persons)

# tm = env.get_template('index')
# msg = tm.render(u=persons[0])

print(msg)
