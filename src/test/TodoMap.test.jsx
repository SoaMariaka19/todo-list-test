import React from "react";
import {create} from "react-test-renderer";
import TodoMap from "../components/TodoMap";

test("test render input", ()=>{
    const todoList = ["test"];

    const tree = create(<TodoMap
        handleCheckboxChange={jest.fn()}
        todoList={todoList}
    />);
    expect(tree.toJSON()).toBeTruthy();

    const instance = tree.root;
    const li = instance.findByProps({className: "data"})
    expect(li.props.children[0]).toEqual("test")
})