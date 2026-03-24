import Image from "../assets/image.png";
import "../styles/Hero.css";
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <h1>Oi, eu sou Dirlandia</h1>
        <p>Desenvolvedora Front-end com foco em React e JavaScript.</p>
        <button
          className="button"
          onClick={() => {
            const element = document.getElementById("projetos");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Ver projetos
        </button>
      </div>
      <div className="hero-image">
        <img src={Image} className="imagem" alt="Vite logo" />
      </div>
    </section>
  );
}

export default Hero;
