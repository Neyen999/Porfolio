import React from 'react';

export const Banner = () => {
  return (
    <section className="main__banner">
        <div className="main__banner--presentation container ">
          <div className="img--wrapper animate__animated animate__backInDown">
            <img src="https://i.postimg.cc/rF9Tbyxh/proff-2.jpg" alt="" />
          </div>
          <h1 className="animate__animated animate__fadeInLeft">Mi nombre es Neyen</h1>
          <h2 className="animate__animated animate__fadeInLeft heading__lvl--two">Front End Developer</h2>
        </div>
        <div className="main__banner--info container animate__animated animate__fadeInLeft">
          <p>
            <span>Desarrollo para</span>
            - Web
          </p>
          <p>
            <span>Teléfono</span>
            - (011) 15-2456-1524 / Preferentemente Whatsappp o Telegram /
          </p>
          <p>
            <span>Dejame un mensaje</span>
            - <a href="#contacto">neyen_gt@hotmail.com</a>
          </p>
          <p>
            <span>Échale un vistazo al repositorio de este porfolio </span>
            - <a href="https://github.com/Neyen999/Porfolio" target="_blank" rel="noreferrer">Repositorio</a>
          </p>
        </div>
    </section>
  );
};
