if __name__ == '__main__':
    print('hello - Введение в декораторы функций | Python для начинающих')

    # https://www.youtube.com/watch?v=v0qZPplzwUQ

    # # example 1
    # def func_decorator(func):
    #     def wrapper(*args, **kwargs):
    #         print("---------1")
    #         func(*args, **kwargs)
    #         print("---------2")
    #
    #     return wrapper
    #
    #
    # def some_func(title, tag):
    #     print(f"title = {title}, tag = {tag}")
    #
    #
    # some_func = func_decorator(some_func)
    # some_func("Python", "h1")

    # example 2
    def func_decorator(func):
        def wrapper(*args, **kwargs):
            print("---------1")
            res = func(*args, **kwargs)
            print("---------2")
            return res

        return wrapper


    def some_func(title, tag):
        print(f"title = {title}, tag = {tag}")
        return f"<{tag}>{title}</{tag}>"


    some_func = func_decorator(some_func)
    res = some_func("Python", "h1")
    print(res)
