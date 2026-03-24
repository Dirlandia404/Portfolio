import "../styles/Technologies.css";
import ReactImage from "../assets/tecnologias/react.png";
import NodeImage from "../assets/tecnologias/node.png";
import JsImage from "../assets/tecnologias/js.png";
import TsImage from "../assets/tecnologias/ts.png";
import PythonImage from "../assets/tecnologias/python.png";
import PhpImage from "../assets/tecnologias/php.png";
import DockerImage from "../assets/tecnologias/docker.png";
import GraphqlImage from "../assets/tecnologias/gra.png";
import NextImage from "../assets/tecnologias/nextt.png";
import JavaImage from "../assets/tecnologias/java.png";
import SpringImage from "../assets/tecnologias/spring.png";

function Technologies() {
  const tecnologias = [
    { nome: "React", imagem: ReactImage, estrelas: 5 },
    { nome: "Node.js", imagem: NodeImage, estrelas: 4 },
    { nome: "JavaScript", imagem: JsImage, estrelas: 5 },
    { nome: "TypeScript", imagem: TsImage, estrelas: 4 },
    { nome: "Python", imagem: PythonImage, estrelas: 3 },
    { nome: "PHP", imagem: PhpImage, estrelas: 4 },
    { nome: "Docker", imagem: DockerImage, estrelas: 3 },
    { nome: "GraphQL", imagem: GraphqlImage, estrelas: 4 },
    { nome: "Next.js", imagem: NextImage, estrelas: 4 },
    { nome: "Java", imagem: JavaImage, estrelas: 3 },
    { nome: "Spring", imagem: SpringImage, estrelas: 3 },
  ];

  return (
    <section id="tecnologias" className="technologies">
      <h3>Tecnologias</h3>
      <p>Essas são as tecnologias que tenho conhecimento:</p>
      <div className="technologies-list">
        {tecnologias.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-info">
              <img src={tech.imagem} alt={tech.nome} className="tech-image" />
            </div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < tech.estrelas ? "filled" : "empty"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
