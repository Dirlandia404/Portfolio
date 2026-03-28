import { useEffect, useState } from "react";
import "../styles/Projects.css";

import BookImage from "../assets/book.png";
import PomodoroImage from "../assets/pomodor.png";
import Cafeteria from "../assets/cafeteria.png";
import numero from "../assets/numero.png";
import Lara from "../assets/lara.png";
import NlwImage from "../assets/nlw.png";

function Projects() {
  const projetos = [
    {
      nome: "Loja de Livros",
      imagem: BookImage,
      link: "https://dirlandia404.github.io/Loja-Livros/",
      github: "https://github.com/Dirlandia404/Loja-Livros",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      nome: "Lara",
      imagem: Lara,
      link: "https://lara-five.vercel.app/",
      github: "https://github.com/Dirlandia404/Lara",
      tecnologias: ["React", "JavaScript", "SCSS"],
    },
    {
      nome: "NLW Unite",
      imagem: NlwImage,
      link: "https://nlw-unite-nu.vercel.app/",
      github: "https://github.com/Dirlandia404/NLW-Unite",
      tecnologias: ["React", "Node.js", "TypeScript"],
    },
    {
      nome: "Cafeteria",
      imagem: Cafeteria,
      link: "https://cafe-wheat-psi.vercel.app/",
      github: "https://github.com/Dirlandia404/cafe",
      tecnologias: ["HTML", "TS", "SCSS"],
    },
    {
      nome: "Jogo número da sorte",
      imagem: numero,
      link: "https://dirlandia404.github.io/Sorteador-de-numero/",
      github: "https://github.com/Dirlandia404/Sorteador-de-numero",
      tecnologias: ["HTML", "JavaScript", "CSS"],
    },
    {
      nome: "Pomodoro Timer",
      imagem: PomodoroImage,
      link: "https://pomodoro-nine-drab.vercel.app/",
      github: "https://github.com/Dirlandia404/Pomodoro-Timer",
      tecnologias: ["React", "JavaScript", "CSS"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 640) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 900) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(projetos.length - itemsPerView, 0);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex, projetos.length]);

  const maxIndex = Math.max(projetos.length - itemsPerView, 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <p>Aqui estão alguns dos projetos desenvolvidos por mim.</p>

      <div className="projects-carousel">
        <button
          className="carousel-btn carousel-btn--left"
          onClick={handlePrev}
          aria-label="Projeto anterior"
        >
          ‹
        </button>

        <div className="projects-wrapper">
          <div
            className="projects-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="project-slide"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <div className="project-card">
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn carousel-btn--right"
          onClick={handleNext}
          aria-label="Próximo projeto"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Projects;
