# https://www.youtube.com/watch?v=Ree-JFi06y8&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=5

from jinja2 import Environment, FileSystemLoader

file_loader = FileSystemLoader('templates_example_2')
env = Environment(loader=file_loader)

# in page.html {% include 'header2.html' ignore missing %}
# чтобы игнорировать исключения и рендерить пустоту при не найденном файле

tm = env.get_template('page.html')
msg = tm.render(title="Про Jinja")

print(msg)
