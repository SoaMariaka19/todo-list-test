import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent ,screen} from "@testing-library/react";
import TodoList from "../components/TodoList";

test("render todolist component" , () => {
  const tree = renderer.create(<TodoList/>);
  const todolist_component = tree.toJSON();
  expect(todolist_component).toMatchSnapshot();
})


test("should return input" , ()=>{
  const testing_compo =  render(<TodoList/>);
  const input = testing_compo.getByPlaceholderText("Enter Todo");
  expect(input).toMatchSnapshot();
})


test("should return button" , ()=>{
  const testing_compo =  render(<TodoList/>);
  const button = testing_compo.getAllByTestId("btn");
  expect(button).toMatchSnapshot();
})


test("h3 context todo" , ()=>{
  render(<TodoList/>);
  const h3 = screen.getByText("Todo:");
  expect(h3).toBeInTheDocument();
})


test("h3 context done" , ()=>{
  render(<TodoList/>);
  const h3 = screen.getByText("Done:");
  expect(h3).toBeInTheDocument();
})


test("inputValue updates when text is entered", () => {
  const { getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText("Enter Todo");
  fireEvent.change(input, { target: { value: "Buy Milk" } });
  expect(input.value).toBe("Buy Milk");
});


test('Adding a new item to the todoList when the user clicks the "Add Todo" button', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText('Enter Todo');
  const addTodoButton = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addTodoButton);

  const todoList = getByText('Test Todo');
  expect(todoList).toBeInTheDocument();
});


it('should render without crashing', () => {
  render(<TodoList />);
});





