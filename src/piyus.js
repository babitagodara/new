import React from 'react';
import ReactDOM from 'react-dom';
import './piyus.css';


class Test extends React.Component {
  render() {
    return  <div className="maindiv_style">
            <h1>Hello World! {this.props.name}</h1>
             <p>welcome to my </p>
            </div>
    
    
  
  }
}

    ReactDOM.render(<Test/> ,document.getElementById('root'));
export default Test;