if __name__ == '__main__':
    print('hello - Паттерн "Моносостояние" | Объектно-ориентированное программирование Python')

    # https://www.youtube.com/watch?v=WNj55JzXnvc&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=9

    class ThreadData:
        __shared_attrs = {
            'name': 'thread_1',
            'data': {},
            'id': 1
        }

        def __init__(self):
            self.__dict__ = self.__shared_attrs


    th1 = ThreadData()
    th2 = ThreadData()

    th2.id = 3
    print(th1.id)

    th1.attr_new = 'new_attr'
    print(th2.attr_new)

