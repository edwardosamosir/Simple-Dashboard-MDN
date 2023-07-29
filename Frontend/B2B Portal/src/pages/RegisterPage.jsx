import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import bannerImage from '../assets/B2BPortalBanner.png';
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <div className="registration-form" style={{ maxWidth: '450px', margin: 'auto', marginTop: '50px' }}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Registration</h5>
            <br />
            <h4 style={{ color: '#5ebf4e' }}>User Info</h4>
            <br />
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email Account</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicMobile">
                <Form.Label style={{ fontWeight: 'bold' }}>Mobile Number</Form.Label>
                <InputGroup>
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <Form.Control
                      as="select"
                      defaultValue="+62"
                      style={{ maxWidth: '90px', minWidth: '80px', paddingRight: '25px' }}
                    >
                      <option>+1</option>
                      <option>+39</option>
                      <option>+41</option>
                      <option>+44</option>
                      <option>+62</option>
                      <option>+63</option>
                      <option>+65</option>
                      <option>+66</option>
                      <option>+81</option>
                      <option>+82</option>
                      <option>+84</option>
                      <option>+86</option>
                      <option>+90</option>
                      <option>+91</option>
                      <option>+598</option>
                      <option>+886</option>
                      <option>+966</option>
                      <option>+971</option>
                      <option>+974</option>
                    </Form.Control>
                    <MdKeyboardArrowDown
                      style={{
                        position: 'absolute',
                        top: '50%',
                        right: '5px',
                        transform: 'translateY(-50%)',
                      }}
                    />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                  />
                </InputGroup>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    style={{ borderRightColor: 'white'}}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility} style={{backgroundColor:'white'}}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter password" />
              </Form.Group>
              <br />
              <br />
              <br />
              <Button type="submit" style={{ width: '100%', backgroundColor: 'rgba(18,183,106,255)', borderColor: 'rgba(18,183,106,255)', marginBottom: '15px', fontWeight: 'bold' }}>Continue</Button>
              <Link to={'/login'}>
                <Button type="button" style={{ width: '100%', color: 'rgba(18,183,106,255)', backgroundColor: 'white', borderColor: 'rgba(18,183,106,255)', fontWeight: 'bold', marginBottom: '25px' }}>Back</Button>
              </Link>
            </Form>
          </div>
        </Col>
        <Col md={1} style={{ backgroundColor: '#32ae1e', height: '100vh' }}></Col>
        <Col md={6} style={{
          backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover',
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh'
        }}></Col>
        <Col md={1} style={{ backgroundColor: '#1e8d91', height: '100vh' }}></Col>
      </Row>
    </Container>

  )

}
