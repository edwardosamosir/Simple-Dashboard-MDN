import { Card, Image } from "react-bootstrap";
import downtrendChart from "../assets/downtrendChart.png";
import uptrendChart from "../assets/uptrendChart.png";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../css/entityCard.css'; // import the CSS file

export default function EntityCard() {
    return (
        <Card className="entity-card" style={{ margin: "10px 5px" }}>
            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <Card.Title style={{ color: 'rgba(90, 92, 105, 255)', marginBottom: '0.5rem' }}>Vendor/Suppliers</Card.Title>
                    <Card.Text style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(90, 92, 105, 255)' }}>200.000</Card.Text>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FaArrowUp style={{ color: 'green' }} />
                        <div style={{ marginRight: "10px", marginLeft: "5px", color: 'green', fontWeight: 'bold' }}>23%</div>
                        <div style={{ color: 'gray' }}>Last Month</div>
                    </div>
                </div>
                <div className="chart-container" style={{ flex: 1, display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <Image className="chart-image" src={uptrendChart} alt="Uptrend Chart" />
                </div>
            </Card.Body>
        </Card>
    );
};
