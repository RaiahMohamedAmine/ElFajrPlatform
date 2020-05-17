import React from 'react'
import './about-us.css'
import CV from '../Components/Presentationals/cv'

const nassim={
    fullName:'Sehdi Mohammed Nassim',
    tel:'0798497663',
    mail:'hm_sehdi@esi.dz',
    links:{
        mail:'/imgs/mail.png',
        linkedin:'https://www.linkedin.com/in/mohammed-nassim-sehdi/',
        facebook:'https://www.facebook.com/mohamednassim.sehdi/',
        github:'https://github.com/SehdiNassim',  
    },
    summary:"Sehdi Nassim est une personne qui adore se casser la tête et dés qu'il a découvert l'informatique, il a su que c'était pour lui. Depuis, il guide sa curiosité vers la découverte de nouvelles technologies, espérant que cette dernières lui permettra delaisser sa trace dans le monde.",
    projects:[
        {
            name:'WeatherLab',
            description:"WeatherLab est mon tout premier projet,implémenté en C# .net et Wpf. Il permet de faire des prédictions et prévisions météorologiques des Wilaya de l'Algérie."
        },
        {
            name:'WeatherLab',
            description:"WeatherLab est mon tout premier projet,implémenté en C# .net et Wpf. Il permet de faire des prédictions et prévisions météorologiques des Wilaya de l'Algérie."
        },
        {
            name:'WeatherLab',
            description:"WeatherLab est mon tout premier projet,implémenté en C# .net et Wpf. Il permet de faire des prédictions et prévisions météorologiques des Wilaya de l'Algérie."
        },
        {
            name:'WeatherLab',
            description:'Weatherlab apllication chaba'
        },
    ],
    skills:[
        'ReactJs','NodeJs','Express','Flutter','.Net','WPF','Javascript','Java',
        'HTML','CSS','Handlebars','Dart','C','C#','git'
    ],
    picture:'/imgs/ImageCV.jpg'
}
const AboutUs=()=>{
    return <div className='about-us'>
        <div className='line-a-us'></div>
        <CV profil={nassim}/>
        <CV profil={nassim}/>
    </div>
}

export default AboutUs