import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../styles/Contact.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function TextControlsExample() {

  const formInitialState = {
    email: '',
    message: ''
  };

  enum SendStatus {
    notSent,
    successfullySent,
    sendingFailed
  }


  const [formState, setFormState] = useState(formInitialState);
  const [buttonText, setButtonText] = useState('Submit');
  const [sendStatus, setSendStatus] = useState(SendStatus.notSent);

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    console.log(formState);
    e.preventDefault();
    setButtonText("Sending...");
    try{
      let response = await fetch("https://138.2.161.235/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify(formState),
      });
      console.log(response);
      if (response.status === 200) {
        setSendStatus(SendStatus.successfullySent);
        setFormState(formInitialState);
      } else {
        setSendStatus(SendStatus.sendingFailed);
      }
    }
    catch (e) {
      console.error(e);
      setSendStatus(SendStatus.sendingFailed);
    }
    
    setButtonText("Submit");
  };

  function AdditionalContentExample() {
      if (sendStatus === SendStatus.notSent) {
        return (<Alert className="alert-invisible"/> );
      }
      else if (sendStatus === SendStatus.successfullySent) {
        return(      
          <Alert className="rounded-0 alert-success">
            <Alert.Heading>Message successfully sent.</Alert.Heading>
            <hr />
            <p>Thank you for reaching out to me. I will get back to you as soon as possible.</p>
          </Alert>
        );
      }
      else {
        return (
          <Alert className="rounded-0 alert-warning">
            <Alert.Heading>Oh no, something went wrong while sending your message!</Alert.Heading>
            <hr />
            <p>Please reach out to me via <Alert.Link href="https://www.linkedin.com/in/sirrenberg/">LinkedIn</Alert.Link>. I will fix this as soon as possible. Sorry for the inconvenience.</p>
          </Alert>
        );
      }
  }

  return (
    <>
    <Container style={{ width: "90%" }}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 left-aligned-form-label" controlId="exampleForm.ControlInput1">
            <Form.Label>Your email address</Form.Label>
            <Form.Control className="rounded-0" type="email" placeholder="name@example.com" 
            onChange={e => setFormState(prevState => ({ ...prevState, email : e.target.value }))}/>
        </Form.Group>
        <Form.Group className="mb-3 left-aligned-form-label" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control className="rounded-0 message-form-control" as="textarea" rows={3} placeholder="Please connect with me via LinkedIn. I didn't have time to set up a mailing Server yet." onChange={e => setFormState(prevState => ({ ...prevState, message : e.target.value }))}/>
        </Form.Group>
        <Button className="rounded-0 submit-button" type="submit"><span>{buttonText}</span></Button>
        </Form>
        <AdditionalContentExample/>
    </Container>

    </>
  );
}
export default TextControlsExample;