if __name__ == '__main__':
    print('hello - Методы класса (classmethod) и статические методы (staticmethod)!')

class Vector:
    MIN_COORD = 0
    MAX_COORD = 100

    # метод класса может обращаться к атрибутам класса,
    # но не экземпляра класса
    # метод класса мы можем спокойно вызывать через сам класс
    # не подставляя cls
    @classmethod
    def validate(cls, arg):
        return cls.MIN_COORD <= arg <= cls.MAX_COORD

    def __init__(self, x, y):
        # можно вместо validate сделать assert
        # assert self.MIN_COORD <= x <= self.MAX_COORD, f"x is less {self.MIN_COORD} or more than {self.MAX_COORD}!"
        # assert self.MIN_COORD <= y <= self.MAX_COORD, f"x is less {self.MIN_COORD} or more than {self.MAX_COORD}!"
        # https://www.youtube.com/watch?v=Ej_02ICOIgs 30:50 example assert

        self.x = self.y = 0
        # if Vector.validate(x) and Vector.validate(y):
        if self.validate(x) and self.validate(y):
            self.x = x
            self.y = y

            # вызов static method из __init__
            print(self.norm2(self.x, self.y))

    def get_coord(self):
        return self.x, self.y

    @staticmethod
    def norm2(x, y):
        return x * x + y * y


# v = Vector(1, 2)
# print(Vector.norm2(5, 6))
# res = Vector.get_coord(v)
# print(res)
#
# print(Vector.validate(5))