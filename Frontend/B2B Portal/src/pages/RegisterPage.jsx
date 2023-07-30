import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import bannerImage from '../assets/B2BPortalBanner.png';
import MyAlert from "../components/Alert";
import { baseUrl } from "../config/api"


export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate()

  const [showAlert, setShowAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: name === "phone" ? combineCountryCodeAndPhone(value) : value,
    }));
  };

  const combineCountryCodeAndPhone = (phoneValue) => {
    const countryCode = userData.countryCode || "+62"; 
    return countryCode + phoneValue;
  };


  const submitHandler = (event) => {
    event.preventDefault();

    if (!userData.email) {
      setErrorMessage('Email cannot be empty!')
      setShowAlert(true)
      return
    }
    if (!userData.password) {
      setErrorMessage('Password cannot be empty!')
      setShowAlert(true)
      return
    }

    if (!userData.phone) {
      setErrorMessage('Phone number cannot be empty!')
      setShowAlert(true)
      return
    }

    if (userData.password.length < 5) {
      setErrorMessage('Password length required minimum 5 characters long')
      setShowAlert(true)
      return
    }

    if (userData.password !== userData.confirmPassword) {
      setErrorMessage('Passwords do not match!')
      setShowAlert(true)
      return;
    }

    const objToPass = (({ confirmPassword, ...rest }) => ({ ...rest, type: 2 }))(userData);

    fetch(baseUrl + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem('access_token')
      },
      body: JSON.stringify(objToPass),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 400: throw new Error('This email is taken already!')
            default: throw new Error('Internal server error.')
          }
        }
      })
      .then((data) => {
        navigate('/')
      })
      .catch((error) => {
        setErrorMessage(error?.message)
        setShowAlert(true)
        return
      })
      .finally(() => {
        const afterSubmitObj = {
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        };
        setUserData(afterSubmitObj);
      })
  };

  return (
    <Container fluid>
      <Row className="align-items-center h-100">
        <Col xs={12} md={4} style={{ marginTop: '50px' }}>
          <div className="registration-form" style={{ maxWidth: '450px', margin: 'auto' }}>
            <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>Registration</h5>
            <br />
            <h4 style={{ color: '#5ebf4e' }}>User Info</h4>
            <br />
            {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: 'bold' }}>Email Account</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={changeHandler}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicMobile">
                <Form.Label style={{ fontWeight: 'bold' }}>Mobile Number</Form.Label>
                <InputGroup>
                  <div style={{ position: 'relative', display: 'inline-flex' }}>
                    <Form.Control
                      as="select"
                      value={userData.countryCode || "+62"}
                      style={{ maxWidth: '90px', minWidth: '80px', paddingRight: '25px' }}
                      onChange={(event) => {
                        const selectedCountryCode = event.target.value;
                        setUserData((prevUserData) => ({
                          ...prevUserData,
                          countryCode: selectedCountryCode,
                        }));
                      }}
              
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
                    name="phone"
                    type="text"
                    placeholder="Enter mobile number"
                    onChange={changeHandler}
                  />
                </InputGroup>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    style={{ borderRightColor: 'white' }}
                    onChange={changeHandler}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility} style={{ backgroundColor: 'white' }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label style={{ fontWeight: 'bold' }}>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter password"
                  onChange={changeHandler}
                />
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
        <Col md={1} className="d-none d-md-block" style={{ backgroundColor: '#32ae1e', height: '100vh' }}></Col>
        <Col md={6} className="d-none d-md-block" style={{
          backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover',
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh'
        }}></Col>
        <Col md={1} className="d-none d-md-block" style={{ backgroundColor: '#1e8d91', height: '100vh' }}></Col>
      </Row>
    </Container>
  )
}
