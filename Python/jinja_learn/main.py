# https://www.youtube.com/watch?v=cFJqMXxVNsI&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=2
# https://www.youtube.com/watch?v=F63wc5nPdho&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=2

from jinja2 import Template
from markupsafe import escape

name = "Федор"

tm = Template("Привет {{name}}")

msg = tm.render(name=name)

link = '''В HTML-документе ссылки определяются так:
<a href="#">Ссылка</a>'''

msg2 = escape(link)  # экранирование

print(msg)
print(msg2)

cities = [
    {'id': 0, 'city': 'Paris'},
    {'id': 1, 'city': 'Москва'},
    {'id': 2, 'city': 'Иркутск'},
    {'id': 3, 'city': 'Ангарск'},
    {'id': 4, 'city': 'Калиниград'},
    {'id': 5, 'city': 'Ставрополь'},
]

ex_1 = '''<select name="cities">
{%for c in cities -%}
{% if c.id > 2 -%}
    <option value="{{c['id']}}">{{c['city']}}</option>
{%elif c.city == "Paris" -%}
    <option>{{c['city']}} - Франция</option>
{% else -%}
    {{c['city']}}
{% endif -%}
{% endfor -%}
</select>'''

# "-" минусы - обратить внимание, с его помощью можем
# убирать перенос строки (ставить минус можно как в правом
# так и в левом "%")

tm = Template(ex_1)
msg_3 = tm.render(cities = cities)

print(msg_3)


