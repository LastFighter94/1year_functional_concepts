class ParentOfParentClass:
    def __init__(self, someList, someStr, someNum):
        self.someList = someList
        self.someStr = someStr
        self.someNum = someNum
        print('init ParentOfParentClass')
        print('************************')
        print(someList, someStr, someNum)

class ParentClass(ParentOfParentClass):
    def __init__(self, someList, someStr, someNum, someDict):
        print('init ParentClass')
        print('************************')
        print(someList, someStr, someNum, someDict, '!!!')
        # super().__init__(someList, someStr, someNum)
        # ParentOfParentClass.__init__(self, someList, someStr, someNum)
        t = someDict.get('test')

class First(ParentClass):
    def __init__(self, someList: list, someStr: str = None, someNum: int = 0, someDict: dict = None):
        print('init First')
        print('************************')
        ParentClass.__init__(self, someList, someStr, someNum, someDict)

    def class_name(self):
        return type(self).__name__


test = First([1,2,3,4], 'string', 150, {'test': 1000})
stop