import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Container, Row, Col, Form, Button, InputGroup, Spinner } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaKey, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../config/api"
import bannerImage from '../assets/B2BPortalBanner.png';
import B2BPortalLogo from '../assets/B2BPortalLogoNoBG.png';
import MyAlert from "../components/Alert";

export default function LoginPage() {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const rememberPreference = Cookies.get("remember");
        if (rememberPreference === "true") {
            setRemember(true);
            const storedEmail = Cookies.get("email") || "";
            setEmail(storedEmail);
            const storedPassword = Cookies.get("password") || "";
            setPassword(storedPassword);
        }
    }, []);

    const handleRememberChange = (event) => {
        const { checked } = event.target;
        setRemember(checked);

        Cookies.set("remember", checked.toString());

        if (!checked) {
            Cookies.remove("email");
            Cookies.remove("password");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email) {
            setErrorMessage("Email is required!");
            setShowAlert(true);
            return;
        }

        if (!password) {
            setErrorMessage("Password is required!");
            setShowAlert(true);
            return;
        }

        const obj = {
            email,
            password,
        };

        setLoading(true);
        fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    switch (response.status) {
                        case 401:
                            throw new Error("Email or password is wrong!");
                        default:
                            throw new Error("Internal server error");
                    }
                }
            })
            .then((data) => {
                const { access_token, email, avatar } = data;
                localStorage.setItem("access_token", access_token);
                localStorage.setItem("email", email);
                localStorage.setItem("avatar", avatar);
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error?.message);
                setShowAlert(true);
                return;
            })
            .finally(() => {
                setLoading(false);

                if (remember) {
                    Cookies.set("email", email);
                    Cookies.set("password", password);
                } else {
                    Cookies.remove("email");
                    Cookies.remove("password");
                }
            });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Container fluid >
                <Row className="align-items-center h-100">
                    <Col xs={12} md={4} style={{ margin: 'auto' }}>
                        <div className="login-form" style={{ maxWidth: '450px', margin: 'auto' }}>
                            <div className="login-form" style={{ maxWidth: '450px', margin: 'auto' }}>
                                <div style={{ marginLeft: '-20px' }}>
                                    <img src={B2BPortalLogo} alt="B2B Portal Logo" style={{ width: "70px", verticalAlign: "middle" }} />
                                    <h3 style={{ fontWeight: 'bold', display: 'inline', verticalAlign: "middle" }}>B2B Portal</h3>
                                </div>
                                <br />
                                <h4 style={{ fontWeight: 'bold' }}>Login to your account</h4>
                                <br />
                                {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
                                <Form onSubmit={handleLogin}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{ fontWeight: 'bold' }}>Email Account</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text style={{ backgroundColor: 'white' }}>
                                                <FaUser />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                style={{ borderLeftColor: 'white' }}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text style={{ backgroundColor: 'white' }}>
                                                <FaKey />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter password"
                                                style={{ borderLeftColor: 'white', borderRightColor: 'white' }}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <InputGroup.Text onClick={togglePasswordVisibility} style={{ backgroundColor: 'white' }}>
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
                                    <Button type="submit"
                                        style={{
                                            width: '100%',
                                            backgroundColor: 'rgba(18,183,106,255)', borderColor: 'rgba(18,183,106,255)',
                                            marginBottom: '15px',
                                            fontWeight: 'bold'
                                        }}> {loading && <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Loading...</span>
                                            &nbsp;
                                        </>
                                        }
                                        {!loading && <span>Login</span>}
                                        {loading && <span>Loading ...</span>}
                                    </Button>
                                    <p style={{ marginTop: '10px', color: 'grey' }}>Don't have an account? <Link to={'/register'} style={{ marginLeft: '5px', textDecoration: 'none', color: 'rgba(18,183,106,255)' }}>Get Started</Link></p>
                                </Form>
                            </div>
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
        </div>
    )

}
