# getattr(obj, name [, default]) - возвращает значение атрибута объекта
# hasattr(obj, name) - проверяет на наличие атрибута name в obj
# setattr(obj, name, value) - задает значение атрибута (если
# атрибут не существует, то он создается)
# delattr(obj, name) удаляет атрибут с именем name
# del obj.attr удаляет атрибут класса

# __doc__ - содержит строку с описанием класса
# __dict__ - содержит набор атрибутов экземпляра класса

if __name__ == '__main__':
    print('hello - атрибуты классов!')

    class Example:
        "Это документация что-ли? Внатуре епта?"
        atr_1 = 'string'
        atr_2 = 100

    e_1 = Example()
    e_2 = Example()

    # type(a) == Example
    # isinstance(e_2, Example)

    # переписываем все atr_2 с 100 на 200
    # Example.atr_2 = 200

    # выведут пустоту - потому что сами объекты Класса
    # не содержат никаких атрибутов
    # atr_1.__dict__
    # atr_2.__dict__

    # Example.__dict__
    # выведет atr_1 and atr_2

    # новые свойства - добавить - два способа
    # Example.new_att_3 = 'new string'
    # setattr(Example, 'new_att_4', 'new string again')
    # Example.__dict__

    # получение атрибута
    # getattr(Example, 'a') # will make Attr Error
    # getattr(Example, 'a', False) # will return False, if not exists,
    # without exception

    # проверка на наличие
    # hasattr(Example, 'prop')

    # deleting attr frpm Class
    # delattr(Example, 'atr_1')

    # deleting attr from Object
    # e_1.new_prop = 1000
    # del e_1.new_prop

    # docs = Example.__doc__
    # print(docs)
    stop
