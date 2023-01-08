if __name__ == '__main__':
    print('hello - How to Iterate Through a Dictionary in Python / real-world examples')

    a_dict = {'one': 1, 'two': 2, 'thee': 3, 'four': 4}
    new_dict = {}
    # # 1
    # keys into values and vice versa
    # for key, value in a_dict.items():
    #     new_dict[value] = key
    # print(new_dict)

    # # 1.1
    # new_dict = {value: key for key, value in a_dict.items()}
    # print(new_dict)

    # # 2
    # filtering items
    # for key, value in a_dict.items():
    #     # If value satisfies the condition, then store it in new_dict
    #     if value <= 2:
    #         new_dict[key] = value
    # print(new_dict)

    # # 2.1
    # new_dict = {k: v for k, v in a_dict.items() if v <= 2}
    # print(new_dict)

    incomes = {'apple': 5600.00, 'orange': 3500.00, 'banana': 5000.00}
    total_income = 0.00

    # # 3
    # doing some calculations
    # for value in incomes.values():
    #     total_income += value  # Accumulate the values in total_income
    # print(total_income)

    # that total_income += value is
    # equivalent to total_income = total_income + value.

    # # 3.1
    # total_income = sum([value for value in incomes.values()])
    # print(total_income)

    # # 3.2
    # более быстрая версия чем версия выше
    # total_income = sum(value for value in incomes.values())
    # print(total_income)

    # # 3.3
    # еще более простой вариант
    # total_income = sum(incomes.values())
    # print(total_income)

    # # 4
    # using comprehensions
    # objects = ['blue', 'apple', 'dog']
    # categories = ['color', 'fruit', 'pet']
    # a_dict_4 = {key: value for key, value in zip(categories, objects)}
    # print(a_dict_4)
    # здесь zip получает два итерируемых объекта (категории и объекты)
    # и делает итератор, который состоит из двух новых элементов

    # # 5
    # removing specific items
    # non_citric = {k: incomes[k] for k in incomes.keys() - {'orange'}}
    # print(non_citric)
    # данный код работает так как key-view objects поддерживают
    # set операции (unions, intersections, differences). Когда
    # вы написали incomes.keys() - {'orange'} внутри словаря
    # вы просто сделали set difference операцию

    # If you need to perform any set operations with the keys
    # of a dictionary, then you can just use the key-view object directly
    # without first converting it into a set. This is a little-known
    # feature of key-view objects that can be useful in some situations.

    # # 6
    # sorting dicts
    # sorted_income = {k: incomes[k] for k in sorted(incomes)}
    # print(sorted_income)

    # # 6.1
    # iterating in sorted order
    # for key in sorted(incomes):
    #     print(key, '->', incomes[key])

    # # 6.2
    # sorted by values
    # def by_value(item):
    #     return item[1]
    #
    #
    # for k, v in sorted(incomes.items(), key=by_value):
    #     print(k, '->', v)

    # # 6.2.1
    # for value in sorted(incomes.values()):
    #     print(value)

    # # 6.3
    # reversed
    # for key in sorted(incomes, reverse=True):
    #     print(key, '->', incomes[key])

    # 6.4
    # iterating Destructively With .popitem()
    # a_dict_6_4 = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}
    #
    # while True:
    #     try:
    #         print(f'Dictionary length: {len(a_dict_6_4)}')
    #         item = a_dict_6_4.popitem()
    #         # Do something with item here...
    #         print(f'{item} removed')
    #     except KeyError:
    #         print('The dictionary has no item now...')
    #         break
