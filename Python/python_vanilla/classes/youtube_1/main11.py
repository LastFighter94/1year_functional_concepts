import math

if __name__ == '__main__':
    print('hello - Магический метод __call__. Функторы и классы-декораторы')

    # https://www.youtube.com/watch?v=UqX5Qekb9sU&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=13

    # ex 1
    # class Counter:
    #     def __init__(self):
    #         self.__counter = 0
    #
    #     def __call__(self, step=1, *args, **kwargs):
    #         print('__call__')
    #         self.__counter += step
    #         return self.__counter
    #
    #
    # c = Counter()
    # c2 = Counter()
    # c()
    # c(2)
    # res = c(10)
    # res2 = c2(-5)
    # print(res, res2)

    # ex2
    # class StripChars:
    #     def __init__(self, chars):
    #         self.__counter = 0
    #         self.__chars = chars
    #
    #     def __call__(self, *args, **kwargs):
    #         if not isinstance(args[0], str):
    #             raise TypeError("Аргумент должен быть строкой!")
    #         return args[0].strip(self.__chars)
    #
    #
    # s1 = StripChars("?:!,; ")
    # s2 = StripChars(" ")
    # res = s1(" Hello World!")
    # res2 = s2(" Hello World!")
    # print(res, res2, sep="\n")

    # ex3
    import math

    class Derivate:
        def __init__(self, func):
            self.__fn = func

        def __call__(self, y, dx=0.0001, *args, **kwargs):
            # print(y) # math.pi/3
            print(self.__fn)
            return (self.__fn(y + dx) - self.__fn(y)) / dx


    @Derivate
    def df_sin(x):
        # print(x, 'df_sin')
        # stop
        return math.sin(x)


    # df_sin = Derivate(df_sin) # то же самое что @Derivate

    # теперь переменная df_sin будет ссылаться не на функцию,
    # а наэкземпляр класса - __call__

    print(df_sin(math.pi/3))
    # stop