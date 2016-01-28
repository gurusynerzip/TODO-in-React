/**
 * Created by gurushantu on 1/28/2016.
 */

import React from 'react';

class Input extends React.Component {

    render() {
        return (
          <div>
              <input value={this.props.inputValue} onChange={this.props.handleChange}/>
              <button onClick={this.props.handleClick}>Submit</button>
          </div>
        );
    }
}

export default Input;
