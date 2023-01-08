if __name__ == '__main__':
    print('hello - How to Iterate Through a Dictionary in Python')

    # в python 2.7 are unordered but order is deterministic
    # a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}
    # a_dict
    # will print {'color': 'blue', 'pet': 'dog', 'fruit': 'apple'}

    # in python 3.5 dicts are unordered and randomized

    # IN PYTHON 3.6 and BEYOND dicts are ORDERED !!!

    # Следует учитывать эти особенности если вы собираетесь
    # писать код, который будет выполняться на разных версиях python

    # # 0
    # print(dir({}))  # special methods

    # ['__class__', '__class_getitem__', '__contains__
    # ', '__delattr__', '__delitem__', '__dir__',
    # '__doc__', '__eq__', '__format__', '__ge__',
    # '__getattribute__', '__getitem__', '__gt__',
    # '__hash__', '__init__', '__init_subclass__',
    # '__ior__', '__iter__', '__le__', '__len__',
    # '__lt__', '__ne__', '__new__', '__or__',
    # '__reduce__', '__reduce_ex__', '__repr__',
    # '__reversed__', '__ror__', '__setattr__',
    # '__setitem__', '__sizeof__', '__str__',
    # '__subclasshook__', 'clear', 'copy',
    # 'fromkeys', 'get', 'items', 'keys',
    # 'pop', 'popitem', 'setdefault', 'update', 'values']

    # if you put a dict into a for loop, python will call __iter__
    # method, which returns an iterator object

    a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}
    # # 1
    # for key in a_dict:
    #     print(key)

    # # 2
    # for key in a_dict:
    #     print(key, '->', a_dict[key])

    # # 3
    # for item in a_dict.items():
    #     print(item)
    # each item is a tuple type
    # so, you can use tuple unpacking to iterate throw a_dict.items()

    # # 4
    # for key, value in a_dict.items():
    #     print(key, '->', value)

    # # 5
    # iterating throw keys
    # for key in a_dict.keys():
    #     print(key)

    # # 6
    # iterating throw values
    # for value in a_dict.values():
    #     print(value)

    # # 7
    # test if value or key is in the dict
    # print('pet' in a_dict.keys())
    # print('apple' in a_dict.values())
    # print('onion' in a_dict.values())

    prices = {'apple': 0.40, 'orange': 0.35, 'banana': 0.25}

    # # 8
    # # modifying values and keys
    # for k, v in prices.items():
    #     prices[k] = round(v * 0.9, 2)  # Apply a 10% discount
    # print(prices)

    # Почему мы не можем изменять ключи или значения прямиком
    # через итерацию, конкретно по ключам или значениям?

    # потому что мы потеряем отсылку к нашему словарю

    # # 8.1
    # for key in prices.keys():
    #     if key == 'orange':
    #         del prices[key]
    # RuntimeError: dictionary changed size during iteration

    # # 8.2
    # data, note main-1note

    # # 9
    # мы можем добавить или удалить ключи из словаря
    # превратив ключи в объект списка (list)
    # for key in list(prices.keys()):  # Use a list instead of a view
    #     if key == 'orange':
    #         del prices[key]  # Delete a key from prices
    # print(prices)
    # однако теперь у нас есть целый list object внутри памяти

