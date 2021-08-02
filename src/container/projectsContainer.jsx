import React from 'react';
import { Projects } from '../components/Projects';
import { SliderData }  from '../components/sliderData';

export const ProjectsContainer = () => {
  return (
    <section className="plans" id="proyectos">
      <h2 className="heading__lvl--two">Mis Proyectos</h2>
      <Projects slides={SliderData}/>
    </section>
  )
}
