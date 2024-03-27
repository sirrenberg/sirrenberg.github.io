import {Button, Card} from "react-bootstrap";
import '../styles/Projects.css';
  
interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    linkToSource: string;
}
  
export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, linkToSource }) => {
    return (
        <Card className="bg-dark text-white my-2" style={{ width: '18rem', height: '30rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button className={linkToSource === "" ? "invisible-card" : "visible-card"} href={linkToSource} variant="primary">View source</Button>
            </Card.Body>
        </Card>
    )
}