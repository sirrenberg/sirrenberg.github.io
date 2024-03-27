import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/Contact.css';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  return (
    <Container style={{ width: "90%" }}>
        <Form>
        <Form.Group className="mb-3 left-aligned-form-label" controlId="exampleForm.ControlInput1">
            <Form.Label>Your email address</Form.Label>
            <Form.Control className="rounded-0" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 left-aligned-form-label" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control className="rounded-0 message-form-control" as="textarea" rows={3} placeholder="Please connect with me via LinkedIn. I didn't have time to set up a mailing Server yet."/>
        </Form.Group>
        </Form>
        <Button className="rounded-0 submit-button" onClick={() => alert("Please connect with me via LinkedIn. I didn't have time to set up a mailing Server yet.")}>Submit</Button>
    </Container>
  );
}
export default TextControlsExample;