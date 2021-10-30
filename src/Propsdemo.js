import React from 'react';

function Propsdemo(props) {
    return (
        <div>
          {props.name}  
          {props.children}
        </div>
    );
}

export default Propsdemo;