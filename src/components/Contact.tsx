import "../styles/Contact.css";
function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      <div className="contact-info">
        <p>
          {" "}
          <a href="mailto:dirlandiadesenvolvedora@gmail.com">
            dirlandiadesenvolvedora@gmail.com
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://github.com/Dirlandia404"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Dirlandia404
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://wa.me/5585985521410"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 85 985521410
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
