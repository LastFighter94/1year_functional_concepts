# https://www.youtube.com/watch?v=RYIGMcJMy6g&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=6

from jinja2 import Environment, FileSystemLoader

file_loader = FileSystemLoader('templates_example_3')
env = Environment(loader=file_loader)

tm = env.get_template('about.html')

output = tm.render()

print(output)
