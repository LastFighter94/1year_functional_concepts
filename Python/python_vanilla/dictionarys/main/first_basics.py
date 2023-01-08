from dict_ import dict_

if __name__ == '__main__':
    print('hello - first basics')

    # # 1
    # defining a dictionary
    example_0 = {
        'Colorado': 'Rockies',
        'Boston': 'Red Sox',
        'Minnesota': 'Twins',
        'Milwaukee': 'Brewers',
        'Seattle': 'Mariners'
    }

    example_1 = dict([
        ('Colorado', 'Rockies'),
        ('Boston', 'Red Sox'),
        ('Minnesota', 'Twins'),
        ('Milwaukee', 'Brewers'),
        ('Seattle', 'Mariners')
    ])

    # если ключи являются простыми строками
    # можно записать их таким способом
    example_2 = dict(
        Colorado='Rockies',
        Boston='Red Sox',
        Minnesota='Twins',
        Milwaukee='Brewers',
        Seattle='Mariners'
    )

    # # 2
    # accessing dictionary values
    # example_0['Minnesota']
    # example_0['Colorado']

    # # 2.1
    # using custom library (to get access with ".")
    # example_special = dict_(example_0)

    # # 3
    # adding, updating, deleting
    # example_0['Kansas City'] = 'Royals' # adding
    # example_0['Seattle'] = 'Seahawks' # updating
    # del example_0['Seattle'] # deleting

    # # 4
    # you can use integers as dicts keys only in strict way
    # because dicts are not like lists and their keys must be
    # immutable (hashable)
    # d = {0: 'a', 1: 'b', 2: 'c', 3: 'd'}
    # print(d[0])
    # print(d[1])

    # вопреки тому что доступ к значениям словаря осуществляется
    # не через их порядок, он все равно сохраняется (при python
    # выше 3.7 версии)

    # # 5
    # another example of building dicts
    # person = {}
    #
    # person['fname'] = 'Joe'
    # person['lname'] = 'Fonebone'
    # person['age'] = 51
    # person['spouse'] = 'Edna'
    # person['children'] = ['Ralph', 'Betty', 'Joey']
    # person['pets'] = {'dog': 'Fido', 'cat': 'Sox'}
    #
    # print(person['fname'])
    # print(person['age'])
    # print(person['children'])
    # print(person['children'][-1])
    # print(person['pets']['cat'])

    # # 6
    # and another example
    # foo = {42: 'aaa', 2.78: 'bbb', True: 'ccc'}
    # print(foo[42])
    # print(foo[2.78])
    # print(foo[True])

    # # 7
    # note
    # example_7 = {
    #     'Colorado': 'Rockies',
    #     'Boston': 'Red Sox',
    #     'Minnesota': 'Timberwolves',
    #     'Milwaukee': 'Brewers',
    #     'Seattle': 'Mariners',
    #     'Minnesota': 'Twins' # this will apper in value
    # }
    # print(example_7)

    # # 8
    # tuple can be dictionary key (immutable)
    # d = {(1, 1): 'a', (1, 2): 'b', (2, 1): 'c', (2, 2): 'd'}
    # print(d(1, 1))

    # first_basics-1note
    # little things about hash
