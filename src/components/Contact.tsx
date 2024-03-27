import '../styles/Contact.css';
import ContactForm from './ContactForm';
import Col from 'react-bootstrap/Col';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div>
                <Col xs={12} sm={10} md={8} lg={6}>
                <h2>Let's Connect!</h2>
                <ContactForm />
                </Col>
            </div>
        </section>
    )
}