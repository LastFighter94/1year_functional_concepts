if __name__ == '__main__':
    print('hello - python-class-constructors: control-your-object-instantiation!')

    # # 1
    # allowing only a single instance in your class

    # The Singleton class in this example has a class
    # attribute called ._instance that defaults to
    # None and works as a cache. The .__
    # new__() method checks if no previous
    # instance exists by testing the
    # condition cls._instance is None.

    # class Singleton(object):
    #     _instance = None
    #
    #     def __new__(cls, *args, **kwargs):
    #         if cls._instance is None:
    #             cls._instance = super().__new__(cls)
    #         return cls._instance
    #
    #
    # first = Singleton()
    # second = Singleton()
    # print(first is second)

    # # 2
    # пример 2
    # from operator import itemgetter
    #
    #
    # def named_tuple_factory(type_name, *fields):
    #     num_fields = len(fields)
    #
    #     class NamedTuple(tuple):
    #         __slots__ = ()
    #
    #         def __new__(cls, *args):
    #             if len(args) != num_fields:
    #                 raise TypeError(
    #                     f"{type_name} expected exactly {num_fields} arguments,"
    #                     f" got {len(args)}"
    #                 )
    #             cls.__name__ = type_name
    #             for index, field in enumerate(fields):
    #                 setattr(cls, field, property(itemgetter(index)))
    #             return super().__new__(cls, args)
    #
    #         def __repr__(self):
    #             return f"""{type_name}({", ".join(repr(arg) for arg in self)})"""
    #
    #     return NamedTuple
    #
    #
    # Point = named_tuple_factory("Point", "x", "y")
    #
    # point = Point(21, 42)
    # point
    #
    # point.x
    # point.y
    #
    # point[0]
    # point[1]
    #
    # point.x = 84
    # dir(point)
    # stop