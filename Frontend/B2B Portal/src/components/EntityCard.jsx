import React, { useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import downtrendChart from "../assets/downtrendChart.png";
import uptrendChart from "../assets/uptrendChart.png";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../css/entityCard.css'; 

export default function EntityCard({ title, value, percentage }) {
  const isPositivePercentage = percentage >= 0;
  const chartImage = isPositivePercentage ? uptrendChart : downtrendChart;
  const percentageColor = isPositivePercentage ? 'green' : 'red';

  return (
    <Card className="entity-card" style={{ margin: "10px 5px" }}>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <Card.Title 
            style={{ 
                color: 'rgba(90, 92, 105, 255)', 
                marginBottom: '0.5rem' 
            }}>
                {title}
            </Card.Title>
          <Card.Text 
            style={{ 
                fontSize: '26px', 
                fontWeight: 'bold', 
                color: 'rgba(90, 92, 105, 255)' 
            }}>
                {value}
            </Card.Text>
          <div 
            style={{ 
                display: "flex", 
                alignItems: "center" 
            }}>
            {isPositivePercentage ? <FaArrowUp style={{ color: 'green' }} /> : <FaArrowDown style={{ color: 'red' }} />}
            <div 
                style={{ 
                    marginRight: "10px", 
                    marginLeft: "5px", color: 
                    percentageColor, 
                    fontWeight: 'bold' 
            }}>
                {Math.abs(percentage)}%
            </div>
            <div style={{ color: 'gray' }}>Last Month</div>
          </div>
        </div>
        <div 
            className="chart-container" 
            style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'end', 
                alignItems: 'center' 
            }}>
          <Image className="chart-image" src={chartImage} alt="Trend Chart" />
        </div>
      </Card.Body>
    </Card>
  );
}