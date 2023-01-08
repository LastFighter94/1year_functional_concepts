if __name__ == '__main__':
    print('hello - dict copy')

    d1 = {'a': 10, 'b': 20, 'c': 30}

    # # 1
    # d2 = {}
    # d2.update(d1)
    # print(d2)
    # print(d2 == d1, d2 is d1)

    # # 2
    # d2 = dict(d1)
    # print(d2)
    # print(d2 == d1, d2 is d1)

    # # 3
    # d2 = dict(d1.items())
    # print(d2)
    # print(d2 == d1, d2 is d1)

    # # 4 NOTE!!!
    # = creates link to the same object - not a copy
    # d2 = d1
    # print(d2 == d1, d2 is d1)
