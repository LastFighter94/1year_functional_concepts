if __name__ == '__main__':
    print('hello - How to Iterate Through a Dictionary in Python / build in functions')

    prices = {'apple': 0.40, 'orange': 0.35, 'banana': 0.25}
    new_prices = {}

    # # 1
    # map()
    # def discount(current_price):
    #     return (current_price[0], round(current_price[1] * 0.95, 2))
    # # Note that discount() returns a tuple of the form (key, value),
    # # where current_price[0] represents the key
    # # and round(current_price[1] * 0.95, 2) represents the new value.
    #
    #
    # new_prices = dict(map(discount, prices.items()))
    # print(new_prices)

    # # 2
    # filter
    # def has_low_price(price):
    #     return prices[price] < 0.4
    #
    #
    # low_price = list(filter(has_low_price, prices.keys()))
    # print(low_price)

    # # 3
    # using collections .chainMap

    # With ChainMap, you can group multiple dictionaries
    # together to create a single, updateable view.

    # from collections import ChainMap
    #
    fruit_prices = {'apple': 0.40, 'orange': 0.35}
    vegetable_prices = {'pepper': 0.20, 'onion': 0.55}
    # chained_dict = ChainMap(fruit_prices, vegetable_prices)
    # print(chained_dict)  # A ChainMap object

    # for key in chained_dict:
    #     print(key, '->', chained_dict[key])

    # # 3.1
    # another way to do what is above
    # for key, value in chained_dict.items():
    #     print(key, '->', value)

    # # 4
    # using itertools

    # Suppose you want to iterate through a dictionary in Python,
    # but you need to iterate through it repeatedly in a single
    # loop. To get this task done, you can use
    # itertools.cycle(iterable), which makes an
    # iterator returning elements from iterable
    # and saving a copy of each. When iterable is exhausted,
    # cycle() returns elements from the saved copy.
    # This is performed in cyclic fashion, so it’s up
    # to you to stop the cycle.

    # from itertools import cycle
    #
    # prices_4 = {'apple': 0.40, 'orange': 0.35, 'banana': 0.25}
    # times = 4  # Define how many times you need to iterate through prices
    # total_items = times * len(prices_4)
    # for item in cycle(prices_4.items()):
    #     if not total_items:
    #         break
    #     total_items -= 1
    #     print(item)

    # # 5
    # chained iteration with chain
    # from itertools import chain
    #
    # fruit_prices = {'apple': 0.40, 'orange': 0.35, 'banana': 0.25}
    # vegetable_prices = {'pepper': 0.20, 'onion': 0.55, 'tomato': 0.42}
    # for item in chain(fruit_prices.items(), vegetable_prices.items()):
    #     print(item)

    # # 6
    # using the dictionary unpacking operator
    # fruit_prices_6 = {'apple': 0.40, 'orange': 0.35}
    # vegetable_prices_6 = {'pepper': 0.20, 'onion': 0.55}
    # # How to use the unpacking operator **
    # print({**vegetable_prices_6, **fruit_prices_6})
    #
    # # You can use this feature to iterate through multiple dictionaries
    # for k, v in {**vegetable_prices_6, **fruit_prices_6}.items():
    #     print(k, '->', v)

    # # 6.1
    # note to above info
    # vegetable_prices = {'pepper': 0.20, 'onion': 0.55}
    # fruit_prices = {'apple': 0.40, 'orange': 0.35, 'pepper': .25}
    # print({**vegetable_prices_6, **fruit_prices_6})

    # It’s important to note that if the dictionaries you’re trying
    # to merge have repeated or common keys, then the values
    # of the right-most dictionary will prevail:

    # quiz!
    # https: // realpython.com / quizzes / python - dictionary - iteration /


