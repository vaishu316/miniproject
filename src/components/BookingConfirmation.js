import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingConfirmation = () => {
  const [formData, setFormData] = useState({
    title: "",
    agenda: "",
    meetingType: "Select",
    department: "",
    year: "",
    remind: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <div className="mt-4 p-4">
      <h3 className="text-center mb-4" style={{ color: "#004d00" }}>New Booking</h3>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Meeting Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter meeting title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="agenda" className="mb-3">
          <Form.Label>Meeting Agenda</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter meeting agenda"
            name="agenda"
            value={formData.agenda}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="meetingType" className="mb-3">
          <Form.Label>Meeting Type</Form.Label>
          <Form.Select name="meetingType" value={formData.meetingType} onChange={handleChange} style={{ borderColor: "#004d00" }}>
            <option>Select</option>
            <option>Guest Lecture</option>
            <option>Seminar</option>
            <option>Competitions</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select name="department" value={formData.department} onChange={handleChange} style={{ borderColor: "#004d00" }}>
                <option>Select</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>IT</option>
                <option>CSBS</option>
                <option>CSD</option>
                <option>VLSI</option>
                <option>MECH</option>
                <option>CIVIL</option>
                <option>ADS</option>
                <option>EIE</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="year" className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select name="year" value={formData.year} onChange={handleChange} style={{ borderColor: "#004d00" }}>
                <option>Select</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="remind" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Remind 15 minutes before the meeting"
            name="remind"
            checked={formData.remind}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="secondary" className="px-4">Cancel</Button>
          <Button variant="success" type="submit" className="px-4">Next</Button>
        </div>
      </Form>
    </div>
  );
};

export default BookingConfirmation;
