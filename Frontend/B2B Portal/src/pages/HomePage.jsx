import React from "react";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import { Container, Row, Col } from "react-bootstrap";
import RevenueChart from "../components/RevenueChart";
import ReceivableChart from "../components/ReceivableChart";
import '../css/chart.css'

export default function HomePage() {
  return (
    <>
      <Container fluid style={{ backgroundColor: 'rgba(250, 250, 251, 255)' }}>
        <Header />
        <DashboardCard />
        <Row className="justify-content-center" style={{ margin: '30px 0' }}>
          <Col xs={12} md={7}>
            <div className="chart-container">
              <ReceivableChart />
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="chart-container">
              <RevenueChart />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
