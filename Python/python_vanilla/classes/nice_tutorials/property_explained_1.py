if __name__ == '__main__':
    print('hello - Property Decorators - Getters, Setters, and Deleters')

    # https://www.youtube.com/watch?v=jCzT9XFZ5bw

    # # Example 1

    # class Employee_1:
    #     def __init__(self, first, last):
    #         self.first = first
    #         self.last = last
    #         self.email = first + '.' + last + '@email.com'
    #
    #     def fullname(self):
    #         return f"{self.first} {self.last}"
    #
    # emp_1 = Employee_1('John', 'Smith')
    #
    # # if i put this
    # emp_1.first = 'Jim'
    # # email will stay John - but i need it to be Jim so Example2
    #
    # print(emp_1.first)
    # print(emp_1.email)
    # print(emp_1.fullname())

    # # Example 2

    class Employee_2:
        def __init__(self, first, last):
            self.first = first
            self.last = last

        # without that decorator we will have to use email() NOT email
        # so we defined our email in a class like methid but abled to access it like a method
        @property
        def email(self):
            return self.first + '.' + self.last + '@email.com'

        @property
        def fullname(self):
            return f"{self.first} {self.last}"

        @fullname.setter
        def fullname(self, name):
            first, last = name.split(' ')
            self.first = first
            self.last = last

        @fullname.deleter
        def fullname(self):
            print('Delete Name!')
            self.first = None
            self.last = None

    emp_2 = Employee_2('John', 'Smith')

    emp_2.fullname = 'Yuri Kishko'

    print(emp_2.first)
    print(emp_2.email)
    print(emp_2.fullname)

    del emp_2.fullname

    print(emp_2.__dict__)

