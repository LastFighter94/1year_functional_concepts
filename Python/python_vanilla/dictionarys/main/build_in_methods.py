if __name__ == '__main__':
    print('hello - build in methods')

    # # 1
    # clear()
    d = {'a': 10, 'b': 20, 'c': 30}
    # d.clear()
    # print(d)

    # # 2
    # get(key) or get(key, default)
    # print(d.get('b'))
    # print(d.get('z'))

    # if <key> is not found and some value is specified (1 in this example)
    # that value is returned instead of None
    # print(d.get('z', 1))

    # # 3
    # items()
    # print(list(d.items()))
    # print(list(d.items())[1][0])

    # returns three tuples of key, value
    # for item in list(d.items()):
    #     print(type(item))

    # # 3.1
    # without making list from d.items()
    # dict_items = d.items()
    # print(dict_items)
    # print(type(dict_items))

    # # 3.2
    # values(), keys()
    # print(list(d.keys()))
    # print(list(d.values()))

    # # 4
    # pop() removes a key from a dictionary,
    # if it is present, and returns its value.
    d_4 = {'a': 10, 'b': 20, 'c': 30}
    # print(d_4.pop('b'))
    # print(d_4)

    # # 4.1
    # d.pop(<key>) raises a KeyError exception if <key> is not in d:
    # d.pop('z')

    # # 4.2
    # if <key> is not in d, and the optional <default>
    # argument is specified, then that value is returned, and no exception is raised:
    # print(d_4.pop('z', -1))
    # print(d_4)

    # # 5
    # popitem() removes the last key-value pair
    # added from d and returns it as a tuple:
    # d_5 = {'a': 10, 'b': 20, 'c': 30}
    # print(d_5.popitem())
    # print(d_5)

    # if d is empty, d.popitem() raises a KeyError exception

    # # 6
    # update()
    # merges a dictionary with another dictionary
    # or with an iterable of key-value pairs.

    # If < obj > is a dictionary, d.update( < obj >) merges the
    # entries from < obj > into d.For each key in < obj >:

    # If the key is not present in d, the key - value pair
    # from < obj > is added to d.

    # If the key is already present in d, the corresponding
    # value in d for that key is updated to the value from < obj >.

    # d1 = {'a': 10, 'b': 20, 'c': 30}
    # d2 = {'b': 200, 'd': 400}
    # d1.update(d2)
    # print(d1)

    # # 6.1
    # also works that way
    # d_6_1 = {'a': 10, 'b': 20, 'c': 30}
    # d_6_1.update([('b', 200), ('d', 400)])
    # print(d_6_1)

    # # 6.2
    # and that way
    # d_6_2 = {'a': 10, 'b': 20, 'c': 30}
    # d_6_2.update(b=200, d=400)
    # print(d_6_2)

    # quiz - https://realpython.com/quizzes/python-dicts/