# https://www.youtube.com/watch?v=dsUOZXM1GAM&list=PLA0M1Bcd0w8wfmtElObQrBbZjY6XeA06U&index=3

from jinja2 import Template
from markupsafe import escape

cars = [
    {'model': 'Ауди', 'price': 23000},
    {'model': 'Шкода', 'price': 17300},
    {'model': 'Вольво', 'price': 44300},
    {'model': 'Фольксваген', 'price': 21300},
]

digs = [1, 2, 3, 4, 5]

# tpl = "Суммарная цена автомобилей {{ cs | sum(attribute='price') }}"
# tpl = "Суммарная цена автомобилей {{ cs | max(attribute='price') }}"
# tpl = "Суммарная цена автомобилей {{ (cs | max(attribute='price')).model }}"
# tpl = "Суммарная цена автомобилей {{ (cs | min(attribute='price')).model }}"
# tpl = "Суммарная цена автомобилей {{ cs | sum }}"
# tpl = "Суммарная цена автомобилей {{ cs | random }}"
tpl = 'Автомобиль {{ cs | replace("о", "О") }}'
tm = Template(tpl)
msg = tm.render(cs=cars)
# msg = tm.render(cs=digs)

print(msg)

##########################################################
# Применим фильтры внутри шаблона
##########################################################

persons = [
    {"name": "Алексей", "old": 18, "weight": 78.5},
    {"name": "Николай", "old": 28, "weight": 82.3},
    {"name": "Иван", "old": 38, "weight": 94.0},
]

tpl_1 = '''
{%- for u in users -%}
{% filter upper %}{{u.name}}{% endfilter %}
{% endfor %}
'''

# filter lower

tm_1 = Template(tpl_1)
msg_1 = tm_1.render(users=persons)

print(msg_1)

##########################################################
# Макросы
##########################################################

html = '''
{% macro input(name, value='', type='text', size=20) -%}
    <input type="{{ type }}" name="{{ name }}" value="{{ value | e }}" size="{{ suze }}">
{%- endmacro %}

<p>{{ input('username') }}
<p>{{ input('email') }}
<p>{{ input('password') }}
'''

tm_2 = Template(html)
msg_2 = tm_2.render()

print(msg_2)

##########################################################
# Next example
##########################################################

html_2 = '''
{% macro list_users(list_of_user) -%}
<ul>
{% for u in list_of_user -%}
    <li>{{u.name}} {{caller(u)}}</li>
{% endfor -%}
</ul>
{%- endmacro %}

{% call(user) list_users(users) %}
    <ul>
    <li>age: {{user.old}}</li>
    <li>weight: {{user.weight}}</li>
    </ul>
{% endcall -%}
'''

tm_3 = Template(html_2)
msg_3 = tm_3.render(users=persons)

print(msg_3)
