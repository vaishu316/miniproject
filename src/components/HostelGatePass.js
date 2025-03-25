import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const HostelGatePassForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    registerNumber: "",
    yearBranch: "",
    roomNumber: "",
    dateFrom: "",
    dateTo: "",
    counselorName: "",
    parentName: "",
    parentContact: "",
    native: "",
    reason: "",
    permissionMethod: "",
    counselorRemarks: "",
    yearCoordinatorSignature: "",
    hodRemarks: "",
    wardenSignature: "",
    studentSignature: "",
    principalSignature: ""
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
    console.log("Hostel Gate Pass Form Submitted:", formData);
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-lg p-4 border-success">
        <h2 className="text-center text-success mb-4">Hostel Gate Pass Form</h2>
        <Form onSubmit={handleSubmit}>
          <h4 className="text-success">Student Details</h4>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Name of the Student</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Register Number</Form.Label>
                <Form.Control type="text" name="registerNumber" value={formData.registerNumber} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Year/Branch/Section</Form.Label>
                <Form.Control type="text" name="yearBranch" value={formData.yearBranch} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Room Number</Form.Label>
                <Form.Control type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>From Date</Form.Label>
                <Form.Control type="date" name="dateFrom" value={formData.dateFrom} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>To Date</Form.Label>
                <Form.Control type="date" name="dateTo" value={formData.dateTo} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          
          <h4 className="text-success">Counselor's Remarks</h4>
          <Form.Group>
            <Form.Label>Name of the Counselor</Form.Label>
            <Form.Control type="text" name="counselorName" value={formData.counselorName} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Parent's Contact</Form.Label>
            <Form.Control type="text" name="parentContact" value={formData.parentContact} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reason for Leave</Form.Label>
            <Form.Control as="textarea" name="reason" value={formData.reason} onChange={handleChange} required />
          </Form.Group>
          
          <h4 className="text-success">Approval</h4>
          <Form.Group>
            <Form.Label>Signature of Year Coordinator</Form.Label>
            <Form.Control type="text" name="yearCoordinatorSignature" value={formData.yearCoordinatorSignature} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Remarks & Signature of HoD</Form.Label>
            <Form.Control as="textarea" name="hodRemarks" value={formData.hodRemarks} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Signature of Warden</Form.Label>
            <Form.Control type="text" name="wardenSignature" value={formData.wardenSignature} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Signature of Student</Form.Label>
            <Form.Control type="text" name="studentSignature" value={formData.studentSignature} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Signature of Principal (if applicable)</Form.Label>
            <Form.Control type="text" name="principalSignature" value={formData.principalSignature} onChange={handleChange} />
          </Form.Group>
          
          <Button variant="success" type="submit" className="mt-3 w-100">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default HostelGatePassForm;
