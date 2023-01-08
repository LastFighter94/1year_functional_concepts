if __name__ == '__main__':
    print('hello - Дескрипторы (data descriptor и non-data descriptor)')

    # https://www.youtube.com/watch?v=ACqsYPbgePk&list=PLA0M1Bcd0w8zPwP7t-FgwONhZOHt9rz9E&index=12

    class ReadIntX:
        def __set_name__(self, owner, name):
            self.name = "_x"

        def __get__(self, instance, owner):
            return getattr(instance, self.name)

        # def __set__(self, instance, value):
        #     setattr(instance, self.name, value)


    class Descriptor_test:
        @classmethod
        def verify_coord(cls, coord):
            if type(coord) != int:
                raise TypeError("Координата должна быть целым числом")

        def __set_name__(self, owner, name):
            self.name = "_" + name

        def __get__(self, instance, owner):
            # return instance.__dict__[self.name]
            return getattr(instance, self.name)

        def __set__(self, instance, value):
            self.verify_coord(value)
            print(f"__set__: {self.name} = {value}")
            # instance.__dict__[self.name] = value
            setattr(instance, self.name, value)


    class Point3D:
        x = Descriptor_test()
        y = Descriptor_test()
        z = Descriptor_test()

        # Дескриптор не данных
        xr = ReadIntX()

        def __init__(self, _testing, x, y, z,):
            self.testing = _testing
            self.x = x
            self.y = y
            self.z = z


        # @classmethod
        # def verify_coord(cls, coord):
        #     if type(coord) != int:
        #         raise TypeError("Координата должна быть целым числом")

        # @classmethod
        # def verify_testing(cls, test):
        #     if type(test) != str:
        #         raise TypeError("Тест не верефицирован!")
        #
        # @property
        # def _testing(self):
        #     return self.testing
        #
        # @_testing.setter
        # def _testing(self, _testing):
        #     self.verify_testing(_testing)
        #     self.testing = _testing
        #
        # @property
        # def x(self):
        #     return self._x
        #
        # @x.setter
        # def x(self, coord):
        #     self.verify_coord(coord)
        #     self._x = coord
        #
        # @property
        # def y(self):
        #     return self._y
        #
        # @y.setter
        # def y(self, coord):
        #     self.verify_coord(coord)
        #     self._y = coord
        #
        # @property
        # def z(self):
        #     return self._z
        #
        # @z.setter
        # def z(self, coord):
        #     self.verify_coord(coord)
        #     self._z = coord

    p = Point3D('testing',1,2,3)

    print(p.__dict__)
    print(p._x)
    print(p.x)
    # print(p._testing)
    # print(p.testing)
    print(p.xr, 'test')
    p.xr = 5
    print(p.xr, 'test', p.__dict__)
    # stop
    # p.__dict__['xr'] = 5
    # print(p.xr, p.__dict__)

    # приоритет обращения к дескриптору данных
    # выше чем к локальным атрибутам экземпляра класса