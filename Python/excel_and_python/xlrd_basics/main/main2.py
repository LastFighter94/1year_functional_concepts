import xlrd
import datetime

if __name__ == '__main__':
    print('hello - xlrd_basics!')

    path = '../data/business_report.xlsx'
    excel_workbook = xlrd.open_workbook(path)

    # excel_worksheet = excel_workbook.sheet_by_index(0)
    excel_worksheet = excel_workbook.sheet_by_name('Sheet1')

    print("Your WorkSheet has " + str(excel_worksheet.ncols) + " columns")
    print("Your WorkSheet has " + str(excel_worksheet.nrows) + " rows")

    # print(excel_worksheet.cell_value(1, 3))

    for row in range(excel_worksheet.nrows):
        for col in range(excel_worksheet.ncols):
            if col == 0 and row == 0:
                print(str(excel_worksheet.cell_value(row, col)), end='\t')
            elif col == 0 and row != 0:
                # format dates
                raw_value = excel_worksheet.cell_value(row, col)
                converted_date = xlrd.xldate_as_tuple(raw_value, excel_workbook.datemode)
                to_print_date = datetime.datetime(*converted_date).strftime("%m/%d/%y")
                print(to_print_date, end='')
            else:
                print('\t' + str(excel_worksheet.cell_value(row, col)), end='\t')
        print()

# https://www.youtube.com/watch?v=-xJF8XlukzA&list=PL3dZTJxh461g-IHdzq-B1CIgMM4Wo1Q2-&index=1