import {render, screen, cleanup} from "@testing-library/react";
import renderer from "react-test-renderer"
import Todo from "../todo"
import React from "react";

afterEach(() => {
    cleanup()
    // cleaning render after each test
})

test('should render non-completed todo',()=> {
    const todo = {id: 1, title: 'do something', completed: false}
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId("todo-1")
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('do something')
    expect(todoElement).not.toContainHTML('strike')
})

test('should render completed todo',()=> {
    const todo = {id: 2, title: 'do something 2', completed: true}
    render(<Todo todo={todo}/>)
    const todoElement = screen.getByTestId("todo-2")
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('do something 2')
    expect(todoElement).toContainHTML('strike')
})

test('matches snapshot',()=> {
    const todo = {id: 1, title: 'do something', completed: false}
    const tree = renderer.create(<Todo todo={todo}/>).toJSON()
    expect(tree).toMatchSnapshot()
    // console.log(tree)
})