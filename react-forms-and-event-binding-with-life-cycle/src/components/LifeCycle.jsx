import React from "react";
import Axios from "axios";

class LifeCycle extends React.Component {

  constructor(props) {
    super(props);
    console.log("constructor executes");

    // Correctly define the state
    this.state = {
      /* usersList: [ // State should be an object containing usersList
         {
           gender: '',
           name: {
             title: '',
             first: '',
             last: ''
           },
           location: {
             street: {
               number: null,
               name: ''
             },
             city: '',
             state: '',
             dob: {
               date: null
             },
             picture: {
               large: '',
               medium: '',
               thumbnail: ''
             }
           }
         }
       ]*/
      usersList: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount called to load the component and here we can call REST API at the time of page load");

    // Example API URL
    this.url = 'https://gist.githubusercontent.com/123-anubhav/8204c04e42866495796db9b155e1012d/raw/ebc855cc55890b1cf5cea0f25444bddbfb60388e/UsersData.json';

    Axios.get(this.url)
      .then((response) => {
        console.log(response.data.results);
        this.setState({ usersList: response.data }); // Update the state with API data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called to unload the component");
  }

  formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", "");
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="container h4 text-danger text-center mt-2">LifeCycle</h1>

        {/* iterating list data  */}

        {this.state.usersList.map((user, index) => (

          <div className="container text-center">
            <div className="row">
              <div className="card">
                <div className="card-header bg-dark text-white h5">
                  user data {index + 1}
                </div>
                <div className="card-body  h5">
                  <div key={index}>
                    <div className="row">
                      <div className="col-md-4 ">
                        <p>Name: {user.name.first} {user.name.last}</p>
                        <p>Gender: {user.gender}</p>
                      </div>
                      <div className="col-md-4 ">
                        <p>D.O.B : {this.formatDate(user.dob.date)}</p>
                        location
                        <p> number: {user.location.street.number} &nbsp;
                          name: {user.location.street.name}</p>
                      </div>

                      <div className="col-md-4">
                        <img height="120" id="shadow"
                          width="100"
                          alt="User Thumbnail"
                          src={user.picture.thumbnail}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }

}

export default LifeCycle;
