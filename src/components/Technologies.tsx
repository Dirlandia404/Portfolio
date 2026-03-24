import "../styles/Technologies.css";

function Technologies() {
  const tecnologias = [
    { nome: "React", imagem: "src/assets/tecnologias/react.png", estrelas: 5 },
    {
      nome: "Node.js",
      imagem: "src/assets/tecnologias/node.png",
      estrelas: 4,
    },
    {
      nome: "JavaScript",

      imagem: "src/assets/tecnologias/js.png",
      estrelas: 5,
    },
    {
      nome: "TypeScript",
      imagem: "src/assets/tecnologias/ts.png",
      estrelas: 4,
    },
    {
      nome: "Python",
      imagem: "src/assets/tecnologias/python.png",
      estrelas: 3,
    },
    { nome: "PHP", imagem: "src/assets/tecnologias/php.png", estrelas: 4 },
    {
      nome: "Docker",
      imagem: "src/assets/tecnologias/docker.png",
      estrelas: 3,
    },
    { nome: "GraphQL", imagem: "src/assets/tecnologias/gra.png", estrelas: 4 },
    {
      nome: "Next.js",
      imagem: "src/assets/tecnologias/nextt.png",
      estrelas: 4,
    },
    { nome: "Java", imagem: "src/assets/tecnologias/java.png", estrelas: 3 },
    {
      nome: "spring",
      imagem: "src/assets/tecnologias/spring.png",
      estrelas: 3,
    },
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
