import React from 'react';
import { Button } from 'react-bootstrap';

export default function CustomButton ({ buttonText }){
  const buttonStyle = {
    color:'black', 
    backgroundColor: 'white', 
    borderColor: 'rgba(210,210,210,255)',
    margin: '0px 15px 0px 5px'
  };

  return (
    <Button style={buttonStyle}>
      {buttonText}
    </Button>
  );
};

