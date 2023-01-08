if __name__ == '__main__':
    print('hello - python3-object-oriented-programming!')

    # remember about indents!

    # # 1
    # class definition
    # class Dog:
    #     pass
    # python class names are written in CapitalizedWords notation
    # by convention

    # # 1.1
    # initialization% instance and class attributes
    # you can give .__init__() any number of parameters,
    # but the first parameter will always be a variable called self
    # class Dog:
    #     enemy = "cat"  # class attributes are attributes that have the same value for all class instances
    #
    #     def __init__(self, name, age):  # below are - unique instance attributes
    #         self.name = name
    #         self.age = age

    # # if you try to create Dog() without attributes
    # # this will raise a typeError% missing (num) of required
    # # positional arguments

    # # Dog()

    # # try this way

    # buddy = Dog("Buddy", 9)
    # miles = Dog("Miles", 4)
    # print(buddy.name)
    # print(buddy.age)
    # print(miles.name)
    # print(miles.age)

    # print(buddy.enemy)

    # # values of attributes can be changed dynamically

    # buddy.age = 10
    # print(buddy.age)

    # # 2
    # instantiate an object in python
    # class Cat:
    #     pass
    #
    #
    # first_instance = Cat()
    # second_instance = Cat()
    #
    # print(first_instance)  # first value
    # print(second_instance)  # second value
    # print(first_instance == second_instance)  # false

    # # 3
    # instance methods
    # class Doggy:
    #     enemy = "cat Tom"
    #
    #     def __init__(self, name, age):
    #         self.name = name
    #         self.age = age
    #
    #     # Instance method
    #     def description(self):
    #         return f"{self.name} is {self.age} years old"
    #
    #     # Another instance method
    #     def speak(self, sound):
    #         return f"{self.name} says {sound}"
    #
    #     # Replace .description() with __str__()
    #     def __str__(self):
    #         return f"{self.name} is {self.age} years old"
    #
    #
    # miles = Doggy("Miles", 4)
    # miles.description()
    # miles.speak("Woof Woof")
    # miles.speak("Bow Wow")
    #
    # print(miles)  # try to print it without __str__ dunder method

    # # 4
    # inheritance from other classes (main-note1)
    # class Doggy_4:
    #     enemy = "cat"
    #
    #     def __init__(self, name, age):
    #         self.name = name
    #         self.age = age
    #
    #     def __str__(self):
    #         return f"{self.name} is {self.age} years old"
    #
    #     def speak(self, sound):
    #         return f"{self.name} says {sound}"
    #
    #
    # class JackRussellTerrier(Doggy_4):
    #     pass
    #
    #
    # class Dachshund(Doggy_4):
    #     pass
    #
    #
    # class Bulldog(Doggy_4):
    #     pass
    #
    #
    # miles = JackRussellTerrier("Miles", 4)
    # buddy = Dachshund("Buddy", 9)
    # jack = Bulldog("Jack", 3)
    # jim = Bulldog("Jim", 5)
    #
    # print(miles.enemy)
    # print(buddy.name)
    # print(jack)
    # print(jim.speak("Woof"))
    #
    # # note
    #
    # print(type(miles))
    # print(isinstance(miles, Doggy_4))
    #
    # # note
    #
    # print(isinstance(miles, Bulldog))
    # print(isinstance(jack, Dachshund))

    # # 5
    # extend the functionality of parent-class
    # class Doggy_5:
    #     enemy = "cat"
    #
    #     def __init__(self, name, age):
    #         self.name = name
    #         self.age = age
    #
    #     def __str__(self):
    #         return f"{self.name} is {self.age} years old"
    #
    #     def speak(self, sound):
    #         return f"{self.name} barks {sound}"
    #
    #
    # class JackRussellTerrier(Doggy_5):
    #     def speak(self, sound="Arf"):
    #         return f"{self.name} says {sound}"
    #
    #         # You can access the parent class from inside a
    #         # method of a child class by using super():
    #         # return super().speak(sound) # better way
    #
    #
    # miles = JackRussellTerrier("Miles", 4)
    # print(miles.speak())
    # print(miles.speak("Grrr"))
