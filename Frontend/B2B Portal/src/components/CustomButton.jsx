import React from 'react';
import { Button } from 'react-bootstrap';


export default function CustomButton ({ buttonText }){
  const buttonStyle = {
    color:'black', 
    backgroundColor: 'white', 
    borderColor: 'rgba(210,210,210,255)',
    margin: '0px 10px 0px 5px',
    width: '110px',  
    height: '40px'  
  };

  return (
    <Button className="btn-responsive" style={buttonStyle}>
      {buttonText}
    </Button>
  );
};
