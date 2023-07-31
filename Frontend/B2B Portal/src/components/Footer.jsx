import React from "react";
import { Row } from "react-bootstrap";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Row className="footer-container p-2 mb-0 py-3 border border-1">
      <footer className="py-1 my-1">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link className="nav-link px-2 text-black">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-black">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-black">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-black">
              About us
            </Link>
          </li>
        </ul>
        <p className="footer-copyright text-black">© 2023 PT Modena Indonesia</p>
      </footer>
    </Row>
  );
}
