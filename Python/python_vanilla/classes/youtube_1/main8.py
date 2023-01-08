if __name__ == '__main__':
    print('hello - Свойства property. Декоратор @property | Объектно-ориентированное программирование Python')

    # https://www.youtube.com/watch?v=MxviMwbGl3I&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=10

    # class Person:
    #     def __init__(self, name, old):
    #         self.__name = name
    #         self.__old = old
    #
    #     def get_old(self):
    #         return self.__old
    #
    #     def set_old(self, old):
    #         self.__old = old
    #
    #     old = property(get_old, set_old)

    # 0
    # f7 f8 - debag

    # 1
    # p = Person('John', 20)
    # p.set_old(35)
    # print(p.get_old())

    # 2
    # p = Person('John', 20)
    # print(p.old)
    # p.__dict__['old'] = 'old in pbject p'
    # p.old = 35
    # print(p.old, p.__dict__)

    ############################################

    class Person_2:
        def __init__(self, name, old):
            self.__name = name
            self.__old = old

        @property
        def old(self):
            return self.__old

        @old.setter
        def old(self, old):
            self.__old = old

        @old.deleter
        def old(self):
            del self.__old

    p_2 = Person_2('Misha', 20)
    # del p_2.old
    p_2.old = 35
    print(p_2.old, p_2.__dict__)

    # вот так можно гибко работать с приватными закрытыми свойствами через объект property
