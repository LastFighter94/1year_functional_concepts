import math

if __name__ == '__main__':
    print('hello - Магические методы __eq__ и __hash__')

    # https://www.youtube.com/watch?v=Cfx4VCnWeCE&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=17

    # Если объекты a == b (равны), то равен и их хэш
    # Равные хэши: hash(a) == hash(b) не гарантируют равенство объектов
    # Если хэши не равны hash(a) != hash(b), то объекты точно не равны

    class Point:
        def __init__(self, x, y):
            self.x = x
            self.y = y

        def __eq__(self, other):
            return self.x == other.x and self.y == other.y

        def __hash__(self):
            return hash((self.x, self.y))

    p1 = Point(1, 2)
    p2 = Point(1, 2)

    # print(hash(p1), hash(p2), sep='\n') # без __hash__ пишет unhashable
    # print(hash(p1), hash(p2), sep='\n') # с __hash__ возращает hash
    # print(p1 == p2) # без __eq__ false
    print(p1 == p2) # с __eq__ true

    d = {}
    d[p1] = 1
    d[p2] = 2
    print(d) # без __hash__ and __eq__ выведет два уникальных ключ-значение
    print(d) # с __hash__ and __eq__ выведет один уникальный ключ с перезаписанным значением

    # 18 видео - остановился
