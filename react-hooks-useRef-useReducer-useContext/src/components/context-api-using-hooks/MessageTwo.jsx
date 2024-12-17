import React, { createContext, Fragment } from "react";
import { ContextVal } from "./contextdefine";
import MessageThree from "./MessageThree";

let MessageTwo = (props) => {

    return (
        <Fragment>
            <div className="contianer   mt-3 text-center  ">
                MessageTwo
                &nbsp;&nbsp;
                <span className="text-danger h3">
                    {props.wish}
                </span>
                <ContextVal.Provider value={ props}>
                    <MessageThree />
                </ContextVal.Provider>
            </div>
        </Fragment>
    );
}

export default MessageTwo;