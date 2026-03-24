import "../styles/Projects.css";

// Importando as imagens diretamente
import BookImage from "../assets/book.png";
import PomodoroImage from "../assets/pomodor.png";
import NlwImage from "../assets/nlw.png";

function Projects() {
  const projetos = [
    {
      nome: "Loja de Livros",
      imagem: BookImage, // Imagem importada
      link: "https://dirlandia404.github.io/Loja-Livros/",
      github: "https://github.com/Dirlandia404/Loja-Livros",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      nome: "Pomodoro Timer",
      imagem: PomodoroImage, // Imagem importada
      link: "https://pomodoro-nine-drab.vercel.app/",
      github: "https://github.com/Dirlandia404/Pomodoro-Timer",
      tecnologias: ["React", "JavaScript", "CSS"],
    },
    {
      nome: "NLW Unite",
      imagem: NlwImage, // Imagem importada
      link: "https://nlw-unite-nu.vercel.app/",
      github: "https://github.com/Dirlandia404/NLW-Unite",
      tecnologias: ["React", "Node.js", "TypeScript"],
    },
    {
      nome: "Loja de Livros",
      imagem: BookImage, // Imagem importada
      link: "https://dirlandia404.github.io/Loja-Livros/",
      github: "https://github.com/Dirlandia404/Loja-Livros",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      nome: "Pomodoro Timer",
      imagem: PomodoroImage, // Imagem importada
      link: "https://pomodoro-nine-drab.vercel.app/",
      github: "https://github.com/Dirlandia404/Pomodoro-Timer",
      tecnologias: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <p>Aqui estão alguns dos projetos desenvolvidos por mim.</p>
      <div className="projects-grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-card">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="project-image"
              />
              <h3>{projeto.nome}</h3>
            </a>
            <p className="project-tech">
              Tecnologias: {projeto.tecnologias.join(", ")}
            </p>
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
