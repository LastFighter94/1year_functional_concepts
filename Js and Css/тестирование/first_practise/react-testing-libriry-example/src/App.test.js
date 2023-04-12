import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)

    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug()
  });

  test('renders learn react link 2', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i)
    // expect(helloWorldElem).toBeNull()
    // screen.debug()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})
    // screen.debug()
  });

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  });

  test('INPUT EVENT',  () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // fireEvent.input(input, {
    //   target: {value: '123'}
    // })
    userEvent.type(input, '123test')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123test')
  });
})
