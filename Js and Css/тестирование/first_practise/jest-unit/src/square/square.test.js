const square = require('./square')

describe('square', () => {
    let mockValue;
    // перед каждым тестом
    beforeEach(() => {
        // mockValue = Math.random()
        // например мы можем здесь добавить что-нибудь в БД
    })
    // один раз перед всеми тестами
    beforeAll(() => {

    })
    test('Корректное значение', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)

        // expect(square(2)).toBeCalledTimes()
    })

    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)

        // expect(square(2)).toBeCalledTimes()
    })

    afterEach(() => {
        // Удалить из БД

        jest.clearAllMocks()
    })
    afterAll(() => {

    })
})