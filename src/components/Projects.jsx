import React, { useState } from 'react'
import Modal from "react-modal"
import { Knowledge } from './Knowledge'
import { IoLogoVercel } from 'react-icons/io5' 
import { SiStyledComponents } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'


Modal.setAppElement("#root");

export const Projects = ({ slides }) => {


  const [current, setCurrent] = useState();
  const [isOpen, setIsOpen] = useState(false);



  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
      {slides.map((slide, index) => {
        return (
          <div key={index} className="plans--description one" onClick={() => {
            setCurrent(index)
            setIsOpen(current !== null ? true : false)
          }}>
            <img src={slide.image} alt={slide.name} />
            <div className="plans--card one">
              <i className="fas fa-eye"></i>
            </div>
          </div>
        )
      })}
      
      {
        current !== undefined ? 
        <Modal 
        isOpen={isOpen}
        style={
          {
            overlay: {
              backgroundColor: "#222222b0",
              zIndex: "4"
            },
            content: {
              border: "none",
              background: "url(https://d33wubrfki0l68.cloudfront.net/0a619155c82b694e2267f3ed5c752919b707e33b/ef36f/static/svg_waves-3c1f0a785319462f6dce04d227eaf664.jpg)",
              display: "flex",
              flexDirection: "column",
              padding: "0",
              justifyContent: "space-around", 
              maxWidth: "500px",
              margin: "0 auto"
            }
          }
        }
        >
        <h2 className="modal--title">{slides[current].name}</h2>
          <div className="modal__img--container">
            <a href={slides[current].anchor}>
              <img className="modal--img" src={slides[current].image} alt={slides[current].name} />
            </a>
          </div>
          <div className="description">
            <p className="modal-description"><em className={`name--${slides[current].name}`}>{slides[current].name}</em>{slides[current].description}</p>
          </div>
          <div className="modal--tools">
            {
              slides[current].name === "Petgram"
              ?
              <>
              <GrGraphQl />
              <SiStyledComponents />
              <Knowledge type="react" iconType="react" />
              <Knowledge type="js" iconType="js" />
              <IoLogoVercel />
              </>
              :
              <>
                <Knowledge type="html" iconType="html5" />
                <Knowledge type="css" iconType="css3-alt" />
                <Knowledge type="react" iconType="react" />
                <Knowledge type="js" iconType="js" />
                <Knowledge type="git" iconType="github-square" />
              </>
            }
          </div>
          <button className="modal--button" onClick={() => {
            setCurrent(undefined)
            setIsOpen(false)
          }}>Close</button>
        </Modal>
        : null
      }
    </>
  )
};
