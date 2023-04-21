import {fireEvent, render, screen} from '@testing-library/react';
import Users from './Users'
import axios from 'axios'
// const axios = require('axios')

jest.mock('axios')

describe('USERS TEST', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch"
                }
            ]
        }
    })

    test('renders learn react link', async () => {
        render(<Users/>)
        axios.get.mockReturnValue(response)

        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(3)

        expect(axios.get).toBeCalledTimes(1)
    })
})