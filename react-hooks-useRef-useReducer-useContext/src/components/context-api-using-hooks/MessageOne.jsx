import React, { Fragment } from "react";
import MessageTwo from "./MessageTwo";

let MessageOne = (props) => {


    return (
        <Fragment>
            <div className="contianer   mt-3 text-center">
                <div className="col-md-6">
                    MessageOne
                </div>
                <div className="col-md-6">
                    <MessageTwo wish="hello i m from parent" />
                </div>
            </div>
        </Fragment>
    );
}

export default MessageOne;