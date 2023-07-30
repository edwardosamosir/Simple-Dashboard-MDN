import { Col, Container, Form, Row, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaBell, FaStore } from 'react-icons/fa';
import { PiCreditCardFill } from 'react-icons/pi';
import profilePic from '../assets/dummyProfilePic.jpg';
import UserProfileDropdown from "./UserProfileDropDown";

export default function Header() {
    const userEmail = localStorage.getItem('email')
    return (
        <div fluid >
            <Row style={{ backgroundColor: 'white', alignItems: 'center' }}>
                <Col sm={3} className="mt-3 mb-3">
                    <Form className="d-flex">
                        <InputGroup>
                            <Button variant="light" style={{ padding: '7px 10px', border: 'none', backgroundColor:'rgba(236,236,236,255)'  }}>
                                <FaSearch style={{ color: 'grey', cursor: 'pointer' }} />
                            </Button>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                size="sm"
                                style={{ 
                                    backgroundColor: 'rgba(236,236,236,255)', 
                                    borderLeftColor: 'rgba(236,236,236,255)'
                                }}
                            />
                        </InputGroup>
                    </Form>
                </Col>
                <Col sm={9} className="text-end">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <div style={{ marginRight: '10px', color: 'gray' }}>{userEmail}</div>
                        <UserProfileDropdown/>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(236,236,236,255)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                        }}>
                            <FaBell style={{ fontSize: '25px', color: 'gray' }} />
                        </div>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(236,236,236,255)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '20px',
                            marginRight: '20px'
                        }}>
                            <PiCreditCardFill style={{ fontSize: '30px', color: 'gray' }} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
