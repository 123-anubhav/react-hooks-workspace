import React, { Fragment, useReducer } from "react";

let UseReducerHook = () => {

    let initialstate = {
        message: 'hello'
    }

    let reducer = (state = initialstate, action) => {
        switch (action.type) {
            case 'gm': return {
                message: 'Good Morning'
            }
            case 'ga': return {
                message: 'Good Afternoon'
            }
            case 'ge': return {
                message: 'Good Evening'
            }
            default: return state;
        }
    }
    let [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card-header bg-secondary text-white text-center h4">
                            Example of useReducer() Hook
                        </div>

                        <div className="card-body bg-dark text-center h5">
                            <br />
                            <div className="text-white ">
                                {state.message}
                            </div>
<br/>
                            <button
                                onClick={event => {
                                    dispatch({
                                        type: 'gm'
                                    })
                                }}
                                className="btn btn-danger btn-sm">Good Morning
                            </button>
                            <button
                                onClick={event =>
                                    dispatch({ type: 'ga' })}
                                className="btn btn-success btn-sm">Good Afternoon
                            </button>
                            <button onClick={event => dispatch({ type: ('ge') })} className="btn btn-warning btn-sm">Good Evening</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UseReducerHook;