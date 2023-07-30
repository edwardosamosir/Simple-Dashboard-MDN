import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import EntityCard from "../components/EntityCard";
import { PiArrowSquareUp } from 'react-icons/pi';
import CustomButton from "./CustomButton";

export default function DashboardCard() {
    return (
        <Container className="mt-1 mb-1" fluid style={{ padding: '10px 30px' }}>
            <Row>
                <Col>
                    <Card>
                        <Card.Header style={{ backgroundColor: 'white', margin: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ marginLeft: '-15px' }}>
                                <Card.Title>Dashboard</Card.Title>
                                <Card.Text style={{ color: 'gray' }}>These companies have a dashboard</Card.Text>
                            </div>
                            <button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid rgba(56, 195, 130, 255)',
                                    borderRadius: '4px',
                                    padding: '8px',
                                    background: 'transparent',
                                    cursor: 'pointer'
                                }}
                            >
                                <PiArrowSquareUp size={18} style={{ color: 'rgba(56, 195, 130, 255)', marginRight: '5px' }} />
                                <Card.Text style={{ color: 'rgba(56, 195, 130, 255)' }}>Import Data</Card.Text>
                            </button>
                        </Card.Header>
                        <Card.Body>
                            <CustomButton buttonText="12 Months" />
                            <CustomButton buttonText="6 Months" />
                            <CustomButton buttonText="5 Months" />
                            <CustomButton buttonText="4 Months" />
                            <CustomButton buttonText="3 Months" />
                            <CustomButton buttonText="2 Months" />
                        </Card.Body>
                        <Card.Body className="mb-3" >
                            <Row>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                                <Col md={3}>
                                    <EntityCard />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
