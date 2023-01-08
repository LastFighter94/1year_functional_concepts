if __name__ == '__main__':
    print('hello - методы классов + self!')


    # # 1
    # class Example_1:
    #     atr_1 = 'atr_1'
    #     atr_2 = 100
    #
    #     def do_something():
    #         print("Где Self епта? Куда себя дел?")
    #
    #
    # Example_1.do_something
    # Example_1.do_something()
    # # ошибок пока что нет
    #
    # ex = Example_1()
    # ex.do_something
    # # ошибок пока что нет
    #
    # ex.do_something()
    # # ОТКУДА ОШИБКА СНИЗУ?
    # # *** TypeError: Example_1.do_something()
    # # takes 0 positional arguments but 1 was given
    #
    # # просто интерпритатор питона - когда вызывается
    # # какой-то метод через объект класса - делает одну вещь
    # # автоматически в функцию метода подставляет параметр self
    # # self = ссылка на экземпляр класса (так происходит всегда
    # # для любого объекта класса если мы методы объявляем как
    # # функцию внутри класса
    # # stop

    # # 2
    # class Example_2:
    #     atr_1 = 'atr_1'
    #     atr_2 = 100
    #
    #     def do_something(self):
    #         print("Вот это да! Ты сделал ссылку на экземпляр класса! Во даешь!" + str(self))
    #
    #
    # ex_2 = Example_2()
    # ex_2.do_something()
    #
    # # но теперь
    # Example_2.do_something() # уже ошибка потому что
    # # нечего подставлять в качестве self (так как напрямую из класса
    # # вызываем
    #
    # # ЗАТО!
    # Example_2.do_something(ex_2)
    # ex_2.do_something()
    # # stop

    # # 3
    # self нужен для того чтобы мы могли работать
    # с конкретными атрибутами локального экземпляра класса
    # class Example_3_4_5:
    #     atr_1 = 'atr_1'
    #     atr_2 = 100
    #
    #     # создаем в экземпляре класса на который
    #     # ссылается self, два локальных
    #     def do_something(self, x, y):
    #         self.x = x
    #         self.y = y
    #
    #     def do_something_2(self):
    #         return (self.x, self.y)
    #
    #
    # ex_3 = Example_3_4_5()
    # ex_4 = Example_3_4_5()
    # ex_4.do_something(10, 20)
    # ex_3.do_something(1, 2)
    # print(ex_3.__dict__)
    # print(ex_4.__dict__)
    #
    # ex_5 = Example_3_4_5()
    # ex_5.do_something(10, 20)
    # print(ex_5.do_something_2())
    #
    # # можно получить доступ к методам также как к атрибутам
    # f = getattr(ex_5, 'do_something_2')
    # print(f)
    # print(f())
