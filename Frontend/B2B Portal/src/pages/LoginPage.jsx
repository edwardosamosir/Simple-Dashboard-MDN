import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaKey, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import bannerImage from '../assets/B2BPortalBanner.png';
import B2BPortalLogo from '../assets/B2BPortalLogoNoBG.png';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleRememberChange = (event) => setRemember(event.target.checked);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login operation
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Container fluid >
                <Row>
                    <Col md={4} style={{ margin: 'auto' }}>
                        <div className="registration-form" style={{ maxWidth: '450px', margin: 'auto' }}>
                            <div style={{ marginLeft: '-20px' }}>
                                <img src={B2BPortalLogo} alt="B2B Portal Logo" style={{ width: "70px", verticalAlign: "middle" }} />
                                <h3 style={{ fontWeight: 'bold', display: 'inline', verticalAlign: "middle" }}>B2B Portal</h3>
                            </div>
                            <br />
                            <h4 style={{ fontWeight: 'bold' }}>Login to your account</h4>
                            <br />
                            <Form >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ fontWeight: 'bold' }}>Email Account</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text style={{backgroundColor:'white'}}>
                                             <FaUser />
                                        </InputGroup.Text>
                                        <Form.Control type="email" placeholder="Enter email" style={{ borderLeftColor:'white'}}/>
                                    </InputGroup>
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text style={{backgroundColor:'white'}}>
                                             <FaKey />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter password"
                                            style={{ borderLeftColor:'white', borderRightColor: 'white'}}
                                        />
                                        <InputGroup.Text onClick={togglePasswordVisibility} style={{backgroundColor:'white'}}>
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicCheckbox" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Form.Check type="checkbox" style={{ fontWeight: 'bold', marginRight: '10px' }} label="Remember Me?" checked={remember} onChange={handleRememberChange} />
                                    <Link to={'/forgot-password'} style={{ textDecoration: 'none', color: 'rgba(18, 183, 106, 255)' }}>Forgot Password?</Link>
                                </Form.Group>
                                <br />
                                <br />
                                <Button type="submit" style={{ width: '100%', backgroundColor: 'rgba(18,183,106,255)', borderColor: 'rgba(18,183,106,255)', marginBottom: '15px', fontWeight: 'bold' }}>Login</Button>
                                <p style={{ marginTop: '10px', color: 'grey' }}>Don't have an account? <Link to={'/register'} style={{ marginLeft: '5px', textDecoration: 'none', color: 'rgba(18,183,106,255)' }}>Get Started</Link></p>
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
        </div>
    )

}
