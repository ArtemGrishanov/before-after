import React from 'react';
import Jaxtapose from './components/Jaxtapose'

class App extends React.Component {
  render() {
    return (
        <Jaxtapose leftText={`Left title`} rightText={`Right title`}>
            <img className="123" src={`http://localhost:3000/1.jpg`} alt=""/>
            <img src={`http://localhost:3000/2.jpg`} alt=""/>
        </Jaxtapose>
    );
  }
}

export default App
