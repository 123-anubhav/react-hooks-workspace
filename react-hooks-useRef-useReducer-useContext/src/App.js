import './App.css';
import UseRefHook from './components/UseRefHook';
import UseReducerHook from './components/UseReducerHook';
import MessageOne from './components/context-api-using-hooks/MessageOne';
import './style.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-5">
            <UseRefHook />
          </div>
          <div className="col-md-6">
            <UseReducerHook />
          </div>
        </div>
        <div className="row mt-3 text-center text-secondary h4">
          <div className="col">

            context-api-using useContext() Example

            <MessageOne  />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
