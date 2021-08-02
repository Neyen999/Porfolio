import React from 'react';
import { Knowledge } from '../components/Knowledge';

export const KnowledgeContainer = () => {
  return (
    <section className="main__conocimientos container">
        <h2 className="heading__lvl--two">Mis Conocimientos</h2>
        <div className="conocimientos">
        <Knowledge type="html" iconType="html5">
          <ul>
            <li>Maquetación Semantica</li>
            <li>Accesibilidad</li>
            <li>Manipulación del DOM</li>
          </ul>
        </Knowledge>
        <Knowledge type="css" iconType="css3-alt">
          <ul>
            <li>Responsive Design Mobile First</li>
            <li>Preprocesadores</li>
            <li>Sass</li>
            <li>Less</li>
            <li>Frameworks css como Bootstrap y Tailwind</li>
          </ul>
        </Knowledge>
        <Knowledge type="js" iconType="js">
          <ul>
            <li>Manejo de Paquetes con NPM</li>
            <li>Single Page Application con Vanilla JS</li>
            <li>Manejo de Webpack</li>
            <li>Babel</li>
            <li>ReactJS</li>
            <li>SPA con React Router</li>
            <li>React Redux y Context</li>
            <li>Styled Components</li>
            <li>Autenticación con JWT</li>
          </ul>
        </Knowledge>
        <Knowledge type="git" iconType="github-square">
          <ul>
            <li>Trabajo con git en la terminal</li>
            <li>Curso de Git y Github Completo en Platzi Aprobado</li>
            <li>Uso de Github y Github Pages</li>
            <li>Deploy de las aplicaciones</li>
            <li>Conocimiento de las buenas practicas en Git y Github</li>
          </ul>
        </Knowledge>
        </div>
      </section>
  )
}
