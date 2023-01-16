if __name__ == '__main__':
    print('hello - python-class-constructors: control-your-object-instantiation!')

    # # 1
    # python's instantiation process (demonstration)
    # print class name
    # not real code example
    # процесс идет сверху вниз, последовательно
    # main-note2
    # class Point_1:
    #     def __new__(cls, *args, **kwargs):
    #         print("1. Create a new instance of Point.")
    #         return super().__new__(cls)
    #
    #     def __init__(self, x, y):
    #         print("2. Initialize the new instance of Point.")
    #         self.x = x
    #         self.y = y
    #
    #     def __repr__(self) -> str:
    #         return f"{type(self).__name__}(x={self.x}, y={self.y})"
    #
    #     def class_name(self):
    #         return f"{type(self).__name__}" # get class_name __name__ example
    #
    #
    # # https://www.youtube.com/watch?v=Aabdr3yxEhQ&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=15
    # # видео о __repr__ и __str__
    #
    # point = Point_1(21, 42)
    # print(point.class_name())  # print name of the class
    # # stop
    #
    # # point
    # # stop

    # # 1.1
    # example 2
    # class A_2:
    #     def __init__(self, a_value):
    #         print("Initialize the new instance of A.")
    #         self.a_value = a_value
    #
    #
    # class B_2:
    #     def __new__(cls, *args, **kwargs):
    #         return A_2(42)
    #
    #     def __init__(self, b_value):
    #         print("Initialize the new instance of B.")
    #         self.b_value = b_value
    #
    #
    # b = B_2(21)
    # # Initialize the new instance of A_2
    #
    # # b.b_value will throw an attribute error
    # # 'A_2' object has no attribute 'b_value'
    # # stop
    #
    # print(isinstance(b, B_2))  # False
    # print(isinstance(b, A_2))  # True
    # print(b.a_value)  # 42

    # # 2
    # # checking __init__ arguments
    # class Rectangle:
    #     def __init__(self, width, height):
    #         if not (isinstance(width, (int, float)) and width > 0):
    #             raise ValueError(f"positive width expected, got {width}")
    #         self.width = width
    #         if not (isinstance(height, (int, float)) and height > 0):
    #             raise ValueError(f"positive height expected, got {height}")
    #         self.height = height


    # rectangle = Rectangle(-21, 42) #  this will throw an exception

    # # 3
    # extend the base class with new attributes and functionality
    # class Person:
    #     def __init__(self, name, birth_date):
    #         self.name = name
    #         self.birth_date = birth_date
    #
    #
    # class Employee(Person):
    #     def __init__(self, name, birth_date, position):
    #         super().__init__(name, birth_date)
    #         self.position = position
    #
    #
    # john = Employee("John Doe", "2001-02-07", "Python Developer")
    # print(john.name)
    # print(john.birth_date)
    # print(john.position)

    # This call ensures the initialization of .name and .birth_date in the parent class, Person.

    # # 4
    # example 4
    # class Greeter:
    #     def __init__(self, name, formal=False):
    #         self.name = name
    #         self.formal = formal
    #
    #     def greet(self):
    #         if self.formal:
    #             print(f"Good morning, {self.name}!")
    #         else:
    #             print(f"Hello, {self.name}!")
    #
    #
    # informal_greeter = Greeter("Pythonista")
    # informal_greeter.greet()
    #
    # formal_greeter = Greeter("Pythonista", formal=True)
    # formal_greeter.greet()

    # # 5
    # example 5
    # вначале метод создает новый образец класса super().__new__
    # в этот раз вызов обращается к float.__new__(), который
    # создает новый образец и инициализирует его как value аргумент
    # потом метод добавляет .unit и возвращает instance
    # class Distance(float):
    #     def __new__(cls, value, unit):
    #         instance = super().__new__(cls, value)
    #         instance.unit = unit
    #         return instance
    #
    #
    # in_miles = Distance(42.0, "Miles")
    # print(in_miles)
    # print(in_miles.unit)
    # print(in_miles + 42.0)
    # print(dir(in_miles))

    # № 6
    # example 6
    # from random import choice
    #
    #
    # class Pet:
    #     def __new__(cls):
    #         other = choice([Dog, Cat, Python])
    #         instance = super().__new__(other)
    #         print(f"I'm a {type(instance).__name__}!")
    #         return instance
    #
    #     def __init__(self):
    #         print("Never runs!")
    #     # because Pet.__new__() always returns objects of a different class rather than of Pet itself.
    #
    #
    # class Dog:
    #     def communicate(self):
    #         print("woof! woof!")
    #
    #
    # class Cat:
    #     def communicate(self):
    #         print("meow! meow!")
    #
    #
    # class Python:
    #     def communicate(self):
    #         print("hiss! hiss!")
    #
    #
    # pet = Pet()
    # pet.communicate()
    #
    # print(isinstance(pet, Pet))
    # print(isinstance(pet, Dog))
    #
    # another_pet = Pet()
    # another_pet.communicate()