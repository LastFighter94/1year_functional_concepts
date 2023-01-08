if __name__ == '__main__':
    print('hello - Магический метод __new__. Пример паттерна Singleton!')

    # # 1
    # class Point:
    #     # cls ссылается на класс
    #     # магический метод __new__ должен возвращать адрес
    #     # нового созданного объекта
    #     def __new__(cls, *args, **kwargs):
    #         print("вызов __new__ для " + str(cls))
    #         return super().__new__(cls)
    #     # super - именно здесь ссылается на базовый класс всех классов
    #     # с Python3 все классы автоматически и неявно
    #     # наследуются от класса object
    #
    #     # self ссылается на экземпляр
    #     def __init__(self, x=0, y=0):
    #         print("вызов __init__ для " + str(self))
    #         self.x = x
    #         self.y = y

    # # 2
    # Singleton pattern example
    # class DataBase:
    #     __instance = None
    #     # этот атрибут будет ссылкой на экземпляр класса
    #     # если экземпляра нет - то атрибут будет None
    #     # а если экземпляр есть - то это будет ссылка на него
    #     def __new__(cls, *args, **kwargs):
    #         if cls.__instance is None:
    #             cls.__instance = super().__new__(cls)
    #         return cls.__instance
    #
    #     # таким образом мы будем контролировать что в нашей
    #     # программе есть ровно один объект класса DataBase
    #
    #     def __del__(self):
    #         self.__instance = None
    #
    #     def __init__(self, user, psw, port):
    #         self.user = user
    #         self.psw = psw
    #         self.port = port
    #
    #     def connect(self):
    #         print(f"соединение с БД: {self.user}, {self.psw}, {self.port}")
    #
    #     def close(self):
    #         print("закрытие соединения с БД")
    #
    #     def read(self):
    #         return "данные из БД"
    #
    #     def write(self, data):
    #         print(f"Запись в БД {data}")
    #
    # db = DataBase('root', '1234', 80)
    # db2 = DataBase('root2', '5678', 40)
    # # print(db1)
    # # print(db1.user)
    # # print(db2)
    # # print(db2.user)
    # print(id(db), id(db2))
    # stop