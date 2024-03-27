import '../styles/Contact.css';
import ContactForm from './ContactForm';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div>
                <Col lg={6}>
                <h2>Let's Connect!</h2>
                <ContactForm />
                </Col>
            </div>
        </section>
    )
}