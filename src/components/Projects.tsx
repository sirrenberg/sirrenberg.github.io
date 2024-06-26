import Col from "react-bootstrap/Col";
import electionImg from "../assets/project-icons/bavarian-state-election-2023.jpeg";
import btor2Img from "../assets/project-icons/Btor2-cert.jpeg";
import golImg from "../assets/project-icons/gol.png";
import wfpImg from "../assets/project-icons/world-food-programme.jpeg";
import cyberzulImg from "../assets/project-icons/cyberzul.png";
import "../styles/Projects.css";
import { ProjectCard } from "./ProjectCard";
import Container from "react-bootstrap/Container";

export const Projects = () => {
  const projects = [
    {
      title: "Election Information System",
      description: "A web tool consisting of a PERN stack that provides information about the Bavarian State Election 2023, by visualizing the results of SQL requests on a database.",
      imgUrl: electionImg,
      linkToSource: "https://github.com/sirrenberg/election-information-system"
    },
    {
      title: "Prediction of Refugee Movements",
      description: "A web tool to predict refugee movements using agent-based modeling with the open source tool flee. This project was developed in collaboration with the World Food Programme and Netlight Consulting.",
      imgUrl: wfpImg,
      linkToSource: "https://github.com/sirrenberg/SoftwareEngineering-WS2024-Caturanga"
    },
    {
      title: "Btor2-Cert",
      description: "A tool to verify the correctness of hardware designs using software analyzers, by translating the hardware design into a software representation. The witness is then validated by a translation back to the hardware design, and validated with a hardware validator.",
      imgUrl: btor2Img,
      linkToSource: "https://www.sosy-lab.org/research/btor2-cert/"
    },
    {
      title: "Cyberzul",
      description: "A futuristic adaptation of the board game Azul in Java. Enables the player to play against a computer opponent or against up to 4 human players in the same network or on the same machine. Due to copyright protection of the original game, we currently do not provide the source code.",
      imgUrl: cyberzulImg,
      linkToSource: ""
    },
    {
      title: "Game of Life",
      description: "The good old Game of Life. A two-dimensional cellular automaton devised by John Conway. This project was developed in Java, with a Java Swing GUI.",
      imgUrl: golImg,
      linkToSource: "https://github.com/sirrenberg/Game-of-Life"
    },
  ];
  return (
    <section className="project" id="projects">
      <Col size={12}>
        <h2>Discover What I've Built</h2>
        <Container fluid style={{ width: "90%" }}>
          <div className="projectsContainer">

            {
              projects.map((project) => {
                return (

                  <ProjectCard  {...project} />

                )
              })
            }

          </div>
        </Container>
      </Col>
    </section>
  );
}
