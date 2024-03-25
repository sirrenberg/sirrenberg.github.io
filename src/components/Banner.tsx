import { Container, Row, Col } from "react-bootstrap"
import {useState, useEffect} from 'react';
import '../styles/Banner.css';
import '../styles/Default.css';

export const Banner = () => {
    const [headerText, setHeaderText] = useState('');
    const [paragraphText, setParagraphText] = useState('');
    const [writingHeaderText, setWritingHeaderText] = useState(true);
    const [writingParagraphText, setWritingParagraphText] = useState(false);
    const period = 100;

    useEffect(() => {
        console.log('useEffect ticker');
        let ticker = setInterval(() => tick(ticker), period);
        return () => clearInterval(ticker);
    }, [headerText, paragraphText]);

    const tick = (ticker : number) => {
        console.log('tick');
        let fullHeaderText = "Hi, I am Nils Sirrenberg. Backend developer.";
        let fullParagraphText = "Your expert for Java, C++, Python, SQL and Databases.";

        if (headerText.length !== fullHeaderText.length) {
            let updatedHeaderText = fullHeaderText.substring(0, headerText.length + 1);
            setHeaderText(updatedHeaderText);
        }
        else if (paragraphText.length !== fullParagraphText.length) {
            setWritingHeaderText(false);
            setWritingParagraphText(true);
            let updatedParagraphText = fullParagraphText.substring(0, paragraphText.length + 1);
            setParagraphText(updatedParagraphText);
        }
        else {
            setWritingParagraphText(false);
            clearInterval(ticker);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={3}>
                        <span className="tagline">Welcome to my Portfolio.</span>
                        {/* <h1>{`Hi, I am Nils Sirrenberg. `}<span className="wrap">Backend developer.</span></h1> */}
                        <h1><span className={writingHeaderText ? "txt-rotate" : ""}><span className="wrap">{headerText}</span></span></h1>
                        <p>
                        <span className={writingParagraphText ? "txt-rotate" : ""}><span className="wrap">{paragraphText}</span></span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}