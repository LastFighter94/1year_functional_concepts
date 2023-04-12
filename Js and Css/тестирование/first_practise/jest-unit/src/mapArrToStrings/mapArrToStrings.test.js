const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Корректное значения', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2, 3, 'fghf', null, undefined])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1,2,3,4])
    })
})