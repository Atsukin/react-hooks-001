import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
    console.log(state, ' in App.js ')

  return (
    <AppContext.Provider value={'Hello, I am a Provider.'}>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </AppContext.Provider>
  );
}

export default App;
