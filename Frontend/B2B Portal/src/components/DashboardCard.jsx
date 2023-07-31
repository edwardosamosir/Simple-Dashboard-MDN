import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import EntityCard from "../components/EntityCard";
import { PiArrowSquareUp } from 'react-icons/pi';
import CustomButton from "./CustomButton";
import "../css/dashboardCard.css"; 

export default function DashboardCard() {
    const [entityData, setEntityData] = useState([
        {
          title: "Vendor/Suppliers",
          value: "200.000",
          percentage: -23
        },
        {
            title: "Customer/Dealer",
            value: "300.000",
            percentage: 23 
        },
        {
            title: "Products SKU",
            value: "300",
            percentage: 23 
        },
        {
            title: "Purchase Order",
            value: "21",
            percentage: -23 
        },
        {
            title: "Sales Order",
            value: "64",
            percentage: -23
        },
        {
            title: "Grinds",
            value: "1.666.664",
            percentage: 23
        },
        {
            title: "Manuals",
            value: "64",
            percentage: -23 
        },
        {
            title: "Vert Transfers",
            value: "2.001",
            percentage: 23 
        },
      ]);

    return (
        <Container className="mt-1 mb-1" style={{ padding: '10px 20px 10px 30px' }} fluid >
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="card-header" style={{ backgroundColor: 'white', margin: '20px' }}>
                            <div className="card-header-left" style={{ marginLeft: '-15px' }}>
                                <Card.Title>Dashboard</Card.Title>
                                <Card.Text style={{ color: 'gray' }}>These companies have a dashboard</Card.Text>
                            </div>
                            <button className="card-header-button"
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
                        {entityData.map((data, index) => (
                          <Col key={index} sm={6} md={3}>
                            <EntityCard
                              title={data.title}
                              value={data.value}
                              percentage={data.percentage}
                            />
                          </Col>
                        ))}
                      </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
