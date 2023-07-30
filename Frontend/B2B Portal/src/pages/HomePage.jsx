import React from "react";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import { Container, Row, Col } from "react-bootstrap";
import RevenueChart from "../components/RevenueChart";
import ReceivableChart from "../components/ReceivableChart";

export default function HomePage() {
  return (
    <>
      <Container fluid style={{ backgroundColor: 'rgba(250, 250, 251, 255)' }}>
        <Header />
        <DashboardCard />
        <Row className="justify-content-center" style={{ margin: '30px 0' }}>
          <Col md={6}>
            <ReceivableChart />
          </Col>
          <Col md={6}>
            <RevenueChart />
          </Col>
        </Row>
      </Container>
    </>
  );
}
