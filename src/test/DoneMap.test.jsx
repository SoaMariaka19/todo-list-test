import React from "react";
import {create} from "react-test-renderer";
import DoneMap from "../components/DoneMap";

test("test render input", ()=>{
    const doneList = ["test"];

    const tree = create(<DoneMap
        handleCheckboxChange={null}
        doneList={doneList}
    />);
    expect(tree.toJSON()).toBeTruthy();

    const instance = tree.root;
    const li = instance.findByProps({className: "li"})
    expect(li.props.children[0]).toEqual("test")
})