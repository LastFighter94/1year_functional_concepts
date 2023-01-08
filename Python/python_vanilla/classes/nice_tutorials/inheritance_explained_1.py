if __name__ == '__main__':
    print('hello - Inheritance - Creating Subclasses')

    # https://www.youtube.com/watch?v=RSl87lqOXDE&t=0s

    class Employee:

        raise_amt = 1.04

        def __init__(self, first, last, pay):
            self.first = first
            self.last = last
            self.email = first + '.' + last + '@email.com'
            self.pay = pay

        def fullname(self):
            return f"{self.first} {self.last}"

        def apply_raise(self):
            self.pay = int(self.pay * self.raise_amt)

    class Developer(Employee):

        def __init__(self, first, last, pay, prog_lang):
            # Employee.__init__(self, first, last, pay)
            super().__init__(first, last, pay)
            self.prog_lang = prog_lang

        raise_amt = 1.10
        # changing attr in subclass does not affect attr in parent class

    class Manager(Employee):

        def __init__(self, first, last, pay, employees=None):
            super().__init__(first, last, pay)
            if employees is None:
                self.employees = []
            else:
                self.employees = employees

        def add_emp(self, emp):
            if emp not in self.employees:
                self.employees.append(emp)

        def remove_emp(self, emp):
            if emp in self.employees:
                self.employees.remove(emp)

        def print_empls(self):
            for emp in self.employees:
                print(f"--> {emp.fullname()}")

    dev_0 = Employee('Corey', 'Schafer', 50000)
    dev_1 = Developer('Corey', 'Schafer', 50000, 'Python')
    dev_2 = Developer('Test', 'Employee', 50000, 'JS')

    mrg_1 = Manager('Sue', 'Smith', 90000, [dev_1])

    # print(help(Developer))

    # print(dev_1.email)
    # print(dev_2.email)

    # print(dev_0.pay)
    # dev_0.apply_raise()
    # print(dev_0.pay)

    # print(dev_1.pay)
    # dev_1.apply_raise()
    # print(dev_1.pay)

    # print(dev_1.email)
    # print(dev_1.prog_lang)

    print(mrg_1.email)
    mrg_1.add_emp(dev_2)
    mrg_1.print_empls()
    print('**************************')
    mrg_1.remove_emp(dev_1)
    mrg_1.print_empls()
    print('**************************')
    print(isinstance(mrg_1, Employee))
    print(isinstance(mrg_1, Manager))
    print(isinstance(mrg_1, Developer))
    print('**************************')
    print(issubclass(Developer, Employee))
    print(issubclass(Manager, Employee))
    print(issubclass(Manager, Developer))