import React, { Fragment, useState } from "react";

let Parent = () => {

    let [state, setState] = useState({
        employee: {
            name: '',
            salary: null,
            emailid: '',
            mobilenumber: null,
            gender: ''
        }
    });

    let { name, salary, emailid, mobilenumber, gender } = state.employee;

    let submitData = (e) => {
        e.preventDefault(); // Prevents form submission from refreshing the page
        alert(state.employee.emailid);
        // LOGIC WHERE YOU WANT A BAKCEND SERVICE CALL BY PSSING FORM DATA 
        // YOU HAVE BINDED DATA TO FIELDS
    }

    let formBind = (event) => {
        console.log("form-bind\n " + event.target.value);
        setState({
            employee: {
                ...state.employee,
                [event.target.name]: event.target.value
            }
        });
    }

    return (
        <Fragment>
            <div className="container text-secondary mt-2">
                <pre>{JSON.stringify(state)}</pre>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header bg-primary text-white h3">
                            form binding with event
                        </div>
                        <div className="card-item bg-light ">
                            <form onSubmit={submitData}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <input type="text"
                                            name='name'
                                            value={name}
                                            className="form-control mb-3"
                                            placeholder="enter name "
                                            onChange={formBind} />
                                        <br />
                                        <input type="email"
                                            name='emailid'
                                            className="form-control mb-3"
                                            value={emailid}
                                            onChange={formBind}
                                            placeholder="enter emailid" />
                                        <b />
                                        <input type="radio"
                                            name='gender'
                                            value="male"
                                            onChange={formBind}
                                        /> male
                                        <input type="radio"
                                            name='gender'
                                            value="female"
                                            onChange={formBind}
                                        />      female

                                    </div>
                                    <div className="col-md-3">

                                        <input type="text"
                                            name='salary'
                                            className="form-control mb-3"
                                            value={salary}
                                            onChange={formBind}
                                            placeholder="enter salary" />
                                        <br />
                                        <input type="text"
                                            className="form-control mb-3"
                                            name='mobilenumber'
                                            value={mobilenumber}
                                            onChange={formBind}
                                            placeholder="enter mobile number" />
                                        <br />
                                    </div>
                                    <div className="col-md-6">
                                        you data which you are inserting is ::<br />
                                        <span className="text-white bg-dark">{JSON.stringify(state.employee)}</span>
                                    </div>
                                </div>
                                <div className="container text-center">
                                    <button className="btn btn-primary" type="submit">submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Parent;