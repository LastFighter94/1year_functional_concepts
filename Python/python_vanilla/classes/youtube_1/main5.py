# pip install accessify

from accessify import private, protected

if __name__ == '__main__':
    print('hello - режимы доступа public, private, protected. Сеттеры и геттеры!')

    # attribute (без одного или двух подчеркиваний вначале) - публичное свойство
    # public

    # _attribute (с одним подчеркиванием) - режим доступа protected (служит
    # для обращения внутри класса и во всех его дочерних классах)
    # указывает нам что это внутренняя служебная переменная
    # явно не блокирует доступ снаружи

    # class Example:
    #     def __init__(self, x=0, y=0):
    #         self._x = x
    #         self._y = y
    #
    # e = Example(1, 2)
    # print(e._x, e._y)

    # __attribute (с двумя подчеркиваниями) - режим доступа private
    # служит для обращения только внутри класса
    # доступ снаружи заблокирован

    class Example_2:
        def __init__(self, x=0, y=0):
            self.__x = self.__y = 0
            if self.__check_value(x) and self.__check_value(y):
                self.__x = x
                self.__y = y

        # функционал защиты через библиотеку выше
        @private
        def test(self):
            return self

        @private
        def __test_again(self):
            return self
        # без private мы все равно сможем обратиться к приватному
        # методу по способу ниже - поэтому библа вверху нужная
        # print(e_2._Example_2__test_again)

        # декоратор на класс повесили для того, чтобы
        # обращаться через класс
        @classmethod
        def __check_value(cls, val):
            return type(val) in (int, float)

        # setter
        def set_coord(self, x, y):
            if self.__check_value(x) and self.__check_value(y):
                self.__x = x
                self.__y = y
            else:
                raise ValueError("Координаты должны быть числами!")

        # getter
        def get_coord(self):
            return self.__x, self.__y


    e_2 = Example_2(1, 2)
    e_2.set_coord(10, 20)
    # внутри класса можем обращаться
    # print(e_2.__x, e_2.__y)
    # извне будет ошибка

    print(e_2.get_coord())

    # setters and getters - нужны, чтобы передавать приватные
    # значения между приватными атрибутами класса и для того,
    # чтобы проверять их корректность

    print(dir(e_2))
    print(e_2.__dict__)

    # к приватному свойству можно обратиться, но так делать крайне
    # не рекомендуется - иначе возможны непредвиденные ошибки
    print(e_2._Example_2__x)
    print(e_2._Example_2__y)

    # print(e_2.test())
    # print(e_2.test_again())
    # print(e_2._Example_2__test_again)


