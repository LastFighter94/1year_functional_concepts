import xlsxwriter

if __name__ == '__main__':
    print('hello - xlsx_basics!')

    path = '../data/business_report copy.xlsx'
    excel_workbook = xlsxwriter.Workbook(path)
    excel_sheet = excel_workbook.add_worksheet()
    # excel_sheet1 = excel_workbook.add_worksheet()
    # we can make two sheets in our file

    # write headers
    excel_sheet.write("A1", "Date")
    excel_sheet.write("B1", "Ravenue")
    excel_sheet.write(0, 2, "Cost")
    excel_sheet.write(0, 3, "Profit")

    # prepare
    dates = ["06/02/2020", "06/03/2020", "06/04/2020"]
    revenues = [100, 300, 500]
    cost = [50, 100, 150]

    for i in range(len(dates)):
        excel_sheet.write(i+1, 0, dates[i])
        excel_sheet.write(i+1, 1, revenues[i])
        excel_sheet.write(i+1, 2, cost[i])
        excel_sheet.write(i+1, 3, '=B' + str(i+2) + '-C' + str(i+2)) #=Bn-Cn like B2-C2

    excel_workbook.close()

# https://www.youtube.com/watch?v=PhEpsA4gWF0&list=PL3dZTJxh461g-IHdzq-B1CIgMM4Wo1Q2-&index=2