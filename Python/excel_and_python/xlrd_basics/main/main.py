import xlrd

if __name__ == '__main__':
    print('hello - xlrd_basics!')

    path = '../data/Example_one.xlsx'

    inputWorkBook = xlrd.open_workbook(path)
    inputWorkSheet = inputWorkBook.sheet_by_index(0)

    # sheet_names = inputWorkBook.sheet_names()
    # print(sheet_names)

    # print(inputWorkSheet.nrows)
    # print(inputWorkSheet.ncols)

    # y, x (not x, y) = starts with 0
    # print(inputWorkSheet.cell_value(0, 0))
    # print(inputWorkSheet.cell_value(1, 0))
    # print(inputWorkSheet.cell_value(2, 0))

    names = []
    scores = []

    # names.append(inputWorkSheet.cell_value(1, 0))
    # names.append(inputWorkSheet.cell_value(2, 0))
    # names.append(inputWorkSheet.cell_value(3, 0))

    # # better way is below

    for y in range(1, inputWorkSheet.nrows):
        # for y in range(1, inputWorkSheet.nrows):
        # if y == 0:
        #     continue
        names.append(inputWorkSheet.cell_value(y, 0))

    for y in range(1, inputWorkSheet.nrows):
        scores.append(int(inputWorkSheet.cell_value(y, 1)))

    print(names)
    print(scores)

    stop

# https://www.youtube.com/watch?v=LXWmwz2qW3Y
