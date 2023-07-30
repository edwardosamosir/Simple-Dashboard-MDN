import React from 'react';
import { Button } from 'react-bootstrap';
// import '../css/customButton.css'; // import the CSS file

export default function CustomButton ({ buttonText }){
  const buttonStyle = {
    color:'black', 
    backgroundColor: 'white', 
    borderColor: 'rgba(210,210,210,255)',
    margin: '0px 10px 0px 5px',
    width: '110px',  // set width 
    height: '40px'   // set height
  };

  return (
    <Button className="btn-responsive" style={buttonStyle}>
      {buttonText}
    </Button>
  );
};
