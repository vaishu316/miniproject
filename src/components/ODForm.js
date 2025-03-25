import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const ODForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    registerNumber: "",
    purpose: "",
    numDays: "",
    dateFrom: "",
    dateTo: "",
    place: "",
    daysAvailed: "",
    studentSignature: false,
    advisorComments: "",
    hodComments: ""
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
    console.log("OD Form Submitted:", formData);
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-lg p-4 border-success">
        <h2 className="text-center text-success mb-4">Student OD Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-success">Name of the Student</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-success">Department</Form.Label>
                <Form.Control as="select" name="department" value={formData.department} onChange={handleChange} required>
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MECH">MECH</option>
                  <option value="CIVIL">CIVIL</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-success">Register Number</Form.Label>
                <Form.Control type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} required placeholder="Enter your register number" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-success">Purpose of OD</Form.Label>
                <Form.Control as="select" name="purpose" value={formData.purpose} onChange={handleChange} required>
                  <option value="">Select Purpose</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Conference">Conference</option>
                  <option value="Symposium">Symposium</option>
                  <option value="Others">Others</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-success">Number of Days</Form.Label>
                <Form.Control type="number" name="numDays" value={formData.numDays} onChange={handleChange} required min="1" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className="text-success">Date From</Form.Label>
                <Form.Control type="date" name="dateFrom" value={formData.dateFrom} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className="text-success">Date To</Form.Label>
                <Form.Control type="date" name="dateTo" value={formData.dateTo} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label className="text-success">Place of Competition</Form.Label>
            <Form.Control type="text" name="place" value={formData.place} onChange={handleChange} required placeholder="Enter location" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-success">Number of Days OD Already Availed</Form.Label>
            <Form.Control type="number" name="daysAvailed" value={formData.daysAvailed} onChange={handleChange} required min="0" />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" name="studentSignature" checked={formData.studentSignature} onChange={handleChange} label="I confirm that the above details are correct" required className="text-success" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-success">Comments by Class Advisor/Year Coordinator</Form.Label>
            <Form.Control as="textarea" name="advisorComments" value={formData.advisorComments} onChange={handleChange} rows={3} placeholder="Enter comments (if any)" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="text-success">Comments by HoD</Form.Label>
            <Form.Control as="textarea" name="hodComments" value={formData.hodComments} onChange={handleChange} rows={3} placeholder="Enter comments (if any)" />
          </Form.Group>
          <Button variant="success" type="submit" className="mt-3 w-100">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ODForm;
