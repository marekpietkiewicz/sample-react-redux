import React from 'react';
import { connect, useStore  } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import logo from './logo.svg';
import './App.css';


function App(props) {

  const simpleAction = (event) => props.simpleAction();
  const store = useStore()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome to React.js</h1>
      </header>

      <br />
      <pre>
        {
          JSON.stringify(props)
        }
      </pre>
      <button onClick={() => simpleAction()}>Test redux</button>

      <pre>
        {
          JSON.stringify(store.getState())
        }
      </pre>

      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);