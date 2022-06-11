import React, { Component } from "react";
import '../css/home.css'
import logo from '../image/TryB-X+ logo.png'
import html from '../image/html.svg'
import css3 from '../image/css.svg'
import js from '../image/js.svg'
import jest from '../image/jest.png'
import react from '../image/react.png'
import redux from '../image/redux.svg'
import hook from '../image/hook.png'
import octopus from '../image/octopus.png'
import mysql from '../image/mysql.png'
import mongodb from '../image/mongo.jpeg'
import nodejs from '../image/nodejs.png'
import github from '../image/github.png'

class Home extends Component {
  render() {
    return (
      <section className='home'>
        <div className="logodiv">
          <img className="logo" src={logo} alt='logo' />
          <h3 className='homeH'>Clique no conteúdo para ver os vídeos</h3>
        </div>
        <aside>
          <div className= 'card'> 
            <h3 className='homeH'>html</h3>
            <img className="materia" src={html} alt='html' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>css3</h3>
            <img className="materia" src={css3} alt='css3' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>Java Script</h3>
            <img className="materia" src={js} alt='js' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>Jest</h3>
            <img className="materia" src={jest} alt='jest' />
          </div>
        </aside>
        <aside>
          <div className= 'card'> 
            <h3 className='homeH'>react</h3>
            <img className="materia" src={react} alt='react' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>redux</h3>
            <img className="materia" src={redux} alt='redux' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>context e hooks</h3>
            <img className="materia" src={hook} alt='context e hooks' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>Testing Library</h3>
            <img className="materia" src={octopus} alt='Testing Library' />
          </div>
        </aside>
        <aside>
          <div className= 'card'> 
            <h3 className='homeH'>mysql</h3>
            <img className="materia" src={mysql} alt='mysql' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>mongodb</h3>
            <img className="materia" src={mongodb} alt='mongodb' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>nodejs</h3>
            <img className="materia" src={nodejs} alt='nodejs' />
          </div>
          <div className= 'card'> 
            <h3 className='homeH'>github</h3>
            <img className="materia" src={github} alt='github' />
          </div>
        </aside>
      </section>
      
    )
  }
}

export default Home

