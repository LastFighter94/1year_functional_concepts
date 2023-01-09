if __name__ == '__main__':
    print('hello - Магические методы __setattr__, __getattribute__, __getattr__ и __delattr__')

    # https://www.youtube.com/watch?v=CAx-NLFc-Z4&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=9

    class Point:
        MAX_COORD = 100
        MIN_COORD = 0

        def __init__(self, x, y):
            self.x = x
            self.y = y

        def set_coord(self, x, y):
            if self.MIN_COORD <= x <= self.MAX_COORD:
                self.x = x
                self.y = y

        # здесь мы изменим значение для всего класса
        @classmethod
        def set_bound(cls, left):
            cls.MIN_COORD = left

        # здесь мы изменим значение только в одном экземпляре класса
        # def set_bound(self, left):
        #     self.MIN_COORD = left

        # __setattr__(self,key,value) - автоматически вызывается при изменении key класса
        # __getattribute__(self,item) - автоматически вызывается при получении свойства класса с именем item
        # __getattr__(self,item) = автоматически вызывается при получении несуществующего свойства item класса
        # __delattr__(self,item) - автоматически вызывается при удалении свойства item (неважно существует оно или нет)

        # 2
        def __getattribute__(self, item):
            if item == 'x':
                raise ValueError('Доступ запрещен!')
            else:
                print("__getattribute__")
                return object.__getattribute__(self, item)
        # как только идет обращение к атрибуту через экземпляр класса
        # срабатывает этот метод
        # с помощью этого метода можем запрещать доступ к определенным атрибутам

        # 3
        def __setattr__(self, key, value):
            if key == 'z':
                raise AttributeError('Недопустимое имя атрибута')
            else:
                object.__setattr__(self, key, value)
                # self.__dict__[key] == value # так тоже сработает а вот внизу будет ошибка
                # из-за рекурсии на __setattr__
                # self.x = value

        # 4
        def __getattr__(self, item):
            return False
            # без False - вывело бы attribute error
            # print("__getattr__: " + item)

        # пояснение к __getattr__
        # class Test():
        #     def __init__(self, x, y):
        #         self.x = x
        #         self.y = y
        #
        #     def __getattr__(self, item):
        #         return 'shit'
        #
        # test = Test(1, 2)
        # print(test.not_existing_attr)

        # 5
        def __delattr__(self, item):
            print("__delattr__: " + item)
            object.__delattr__(self, item)

    # 1
    # pt1 = Point(1 ,2)
    # pt2 = Point(10 ,20)
    # pt1.set_bound(-100)
    # print(pt1.__dict__)
    # print(Point.__dict__)

    # 2
    # pt1 = Point(1 ,2)
    # pt2 = Point(10 ,20)
    # a = pt1.x # value Error
    # # a = pt1.y # no error
    # print(a)

    # 3
    # pt1 = Point(1 ,2)
    # pt2 = Point(10 ,20)
    # # pt1.z = 10 # Attribute Error - наложили запрет на создание атрибута с таким именем
    # pt2.y = 10

    # 4
    # pt1 = Point(1 ,2)
    # pt2 = Point(10 ,20)
    # print(pt1.yy) # выводится имя несуществуюшего атрибута и None, because pt1.yy == None
    # print(pt1.MAX_COORD)

    # 5
    pt1 = Point(1 ,2)
    pt2 = Point(10 ,20)
    del pt1.x
    print(pt1.__dict__)