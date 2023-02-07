import React from "react";

const TodoMap = ({todoList, handleCheckboxChange}) =>{
    return(
        <>
            {
                todoList.map((todo, index) => (
                    <li key={index} className="data">
                        {todo}
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(index)}
                        />
                    </li>
        ))
        }
        </>
    )
}
export default TodoMap;