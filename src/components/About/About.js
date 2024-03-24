import hiringImage from '../../images/hire.jpg';

function About (props) {
  return (
    <div className="about">
      <div className="about__content">
        <section className="about-jobs">
          <h3 className="about__title">Sobre essse site</h3>
          <p className="about__text">Encontre a vaga de emprego dos seus sonhos!</p>
          <p className="about__text">Esse site foi feito para que você possa buscar vagas de empregos em diversas áreas e empresas. Basta ir na aba "Encontre sua vaga".</p>
          <p className="about__text">No momento o site ainda está em desenvolvimento, mas espero que possam desfrutá-lo.</p>
        </section>

        <section className="about-project">
          <h3 className="about__title">Sobre esse projeto</h3>
          <p className="about__text">Este site é o projeto final do curso da TripleTen!</p>
          <p className="about__text">Projeto desenvolvido seguindo o que foi proposto no curso de Desenvolvimento Web da TripleTen. O projeto foi desenvolvido utilizando React, HTML, CSS e javascript, seguindo os príncipios do BEM.</p>
          <p className="about__text">O site conta com a utilização de textos, imagens, além do uso de um layout responsivo. Utiliza como base a api <em>The Muse</em>.</p>
        </section>
      </div>

      <img className="about__image" src={hiringImage} alt="Ilustração de emprego"></img>
    </div>
  )
}

export default About;