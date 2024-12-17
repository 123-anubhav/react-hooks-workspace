import React, { Fragment, useContext } from "react";
import { RouterProviderProps } from "react-router-dom";
import { ContextVal } from "./contextdefine";

let MessageFour = () => {

    const contextReader = useContext(ContextVal);

    return (
        <Fragment>
            <div className="mt-3 text-center">
                MessageFour  &nbsp;&nbsp;
                Comes Value from Parent Component [MessageTwo] ==  &nbsp;&nbsp;
                <span className="text-white bg-dark text-center">
                    {contextReader.wish}
                </span>
            </div>
        </Fragment>
    );
}

export default MessageFour;