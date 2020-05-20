import React from 'react'
import './cv.css'

const CV = ({
    profil
}) => {
    const { links, projects, summary, picture, fullName, tel, mail ,skills} = profil
    return <div className='cv'>
        <div className='cv-header'>
            <div>
                <p>{fullName}</p>
                <p>{mail}</p>
                <p>{tel}</p>
            </div>
            <div className='cv-picture' style={{ backgroundImage: picture }}>
                <img src={picture} alt="Photo d'identité"></img>
            </div>
        </div>
        <div className='cv-section'>
            <h1>Résumé</h1>
            <div className='summary-item'>{summary}</div>
        </div>
        <div className='cv-section'>
            <h1>Projets</h1>
            {projects.map(
                (project, i) => {
                    return <div className='project-item' key={i}>
                        <span>{project.name}</span>
                        <span>{project.description}</span>
                    </div>
                }
            )}
        </div>
        <div className='cv-section'>
            <h1>Compétences</h1>
            <div className='cv-skills'>
                {skills.map(
                    (skill,i)=> <span key={i}>{skill}</span>
                )}
            </div>
        </div>
        <div className='cv-section'>
            <h1>Contactez-moi</h1>
            <div className='cv-links'>
                {Object.keys(links).map(
                    (key, i) => {
                        return <a key={i} href={links[key]} target='_blank'><img className='link-logo' src={'/imgs/' + key + '.png'} alt={key} /></a>
                    }
                )}
            </div>
        </div>
    </div>
}

export default CV