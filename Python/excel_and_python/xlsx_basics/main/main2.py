import xlsxwriter

if __name__ == '__main__':
    print('hello - xlsx_basics!')

    path = '../data/business_report copy 2.xlsx'
    excel_workbook = xlsxwriter.Workbook(path)
    excel_sheet = excel_workbook.add_worksheet()
    # excel_sheet1 = excel_workbook.add_worksheet()
    # we can make two sheets in our file

    # create formats for headers
    header_format = excel_workbook.add_format()
    header_format.set_font_color('white')
    header_format.set_bg_color('#000000')
    header_format.set_underline(True)
    header_format.set_center_across(True)
    header_format.set_font_size(14)

    money_format = excel_workbook.add_format({'num_format': '$####'})
    bold_money_format = excel_workbook.add_format({'num_format': '$####', 'bold': True})

    # write headers
    excel_sheet.write("A1", "Date", header_format)
    excel_sheet.write("B1", "Ravenue", header_format)
    excel_sheet.write(0, 2, "Cost", header_format)
    excel_sheet.write(0, 3, "Profit", header_format)

    # prepare
    dates = ["06/02/2020", "06/03/2020", "06/04/2020"]
    revenues = [1000, 3000, 500]
    cost = [50.32, 100.12, 150.92]

    for i in range(len(dates)):
        excel_sheet.write(i + 1, 0, dates[i])
        excel_sheet.write(i + 1, 1, revenues[i], money_format)
        excel_sheet.write(i + 1, 2, cost[i], money_format)
        excel_sheet.write(i + 1, 3, '=B' + str(i + 2) + '-C' + str(i + 2), bold_money_format)  # =Bn-Cn like B2-C2

    excel_workbook.close()

# https://www.youtube.com/watch?v=LEQA-8gUQDM&list=PL3dZTJxh461g-IHdzq-B1CIgMM4Wo1Q2-&index=3
