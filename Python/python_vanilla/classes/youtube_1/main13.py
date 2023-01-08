import math

if __name__ == '__main__':
    print('hello - Магические методы __add__, __sub__, __mul__, __truediv__')

    # https://www.youtube.com/watch?v=OMMQ1ZNKK6Q&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=15

    class Clock:
        __DAY = 86400 # число секунд в одном дне

        def __init__(self, seconds: int):
            if not isinstance(seconds, int):
                raise TypeError("Секунды должны быть целым числом")
            self.seconds = seconds % self.__DAY

        def get_time(self):
            seconds = self.seconds % 60
            minutes = (self.seconds // 60) % 60
            hours = (self.seconds // 3600) % 24
            # stop
            return f"{self.__get_formatted(hours)}:{self.__get_formatted(minutes)}:{self.__get_formatted(seconds)}"

        @classmethod
        def __get_formatted(cls, x):
            return str(x).rjust(2, "0")
        # str(2).rjust(2, "0")
        # '02'

        def __add__(self, other):
            if not isinstance(other, (int, Clock)):
                raise ArithmeticError("Правый операнд должен быть init или Clock")

            sc = other
            if isinstance(other, Clock):
                sc = other.seconds

            return Clock(self.seconds + sc)

        def __radd__(self, other):
            return self + other

        def __iadd__(self, other):
            print('__iadd__')

            if not isinstance(other, (int, Clock)):
                raise ArithmeticError("Правый операнд должен быть init или Clock")

            sc = other
            if isinstance(other, Clock):
                sc = other.seconds

            return Clock(self.seconds + sc)


    c1 = Clock(1000)
    c2 = Clock(2000)
    print(c1.get_time())
    c1 = c1 + 100
    c1.seconds += 100
    # c1 = c1 + '100'
    print(c1.get_time())
    c3 = c1 + c2
    print(c3.get_time())

    # https://tatyderb.gitbooks.io/python-express-course/content/chapter_oop/oop_override5.html

    stop