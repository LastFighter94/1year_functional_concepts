import xlsxwriter
import xlrd

if __name__ == '__main__':
    print('hello - xlrd+xlsx!')

    # open old file (xlrd)
    old_path = '../data/business_report.xlsx'
    old_workbook = xlrd.open_workbook(old_path)
    old_worksheet = old_workbook.sheet_by_index(0)

    # copy data
    all_rows = []
    for row in range(old_worksheet.nrows):
        curr_row = []
        for col in range(old_worksheet.ncols):
            curr_row.append(old_worksheet.cell_value(row, col))
        all_rows.append(curr_row)

    # modify data
    all_rows[3][1] = 1000000

    # create new file (xlsx)
    # if I want to overwrite previous file - I use old_path
    new_path = '../data/modified_business_report.xlsx'
    new_workbook = xlsxwriter.Workbook(new_path)
    new_worksheet = new_workbook.add_worksheet()

    # populate the new file
    for row in range(len(all_rows)):
        for col in range(len(all_rows[0])):
            new_worksheet.write(row, col, all_rows[row][col])
    new_workbook.close()

# https://www.youtube.com/watch?v=Lp4fnpCTqZ8&list=PL3dZTJxh461g-IHdzq-B1CIgMM4Wo1Q2-&index=4
