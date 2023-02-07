import React from "react";

const DoneMap = ({doneList, handleRemoveDone}) =>{
    return(
        <>
            {doneList.map((done, index) => (
                <li key={index} className="li">
                    {done}
                    <button onClick={() => handleRemoveDone(index)}>Remove</button>
                </li>
            ))}
        </>

    )
}
export default DoneMap;