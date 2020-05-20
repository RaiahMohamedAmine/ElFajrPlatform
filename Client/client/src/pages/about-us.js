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

const amine= {
    
    fullName:'RAIAH Mohamed Amine',
    tel:'0554704401',
    mail:'hm_raiah@esi.dz',
    links:{
        mail:'/imgs/mail.png',
        linkedin:'https://www.linkedin.com/in/mohamed-amine-raiah-00250718a/',
        facebook:'https://www.facebook.com/ami.nou.167/',
        github:'https://github.com/RaiahMohamedAmine',  
    },
    summary:"La curiosité et le serieux font de Raiah Mohamed Amine une personne compétente qui aime ce qu'elle fait. Qualifié de leadership et d'une bonne analyse des faits, Amine va toujours de l'avant pour gèrer son équipe. Suivre la tendance technologique représente le big challenge de ce jeune developpeur assoifé d'enrichir ses connaissances .",
    projects:[
        {
            name:'WeatherLab',
            description:"WeatherLab est une application bureau, qui réalise des prédicitions météorologiques en se basant sur un dataset Algérien."
        },
        {
            name:'Wissal Store',
            description:"Wissal Store est une application mobile de vente en ligne (E-Commerce) des outils eléctroniques, developpé pour l'entreprise Wissal-Groupe."
        },
        {
            name:'Care-!T',
            description:"Care-!T représente une solution mobile conçu afin vous donner un diagnostic minimaliste sur votre etat de santé, developpée lors d'une compétition en Espagne."
        }
    ],
    skills:[
        'HTML','CSS','Javascript', 'NodeJs','Express', 'MongoDB','Flutter', 'Dart','C# / WPF','.Net',
        'Docker','Git','Leadership','Team Managment'
    ],
    picture:'/imgs/Amine.png'
}
const AboutUs=({

})=>{
    return <div className='about-us'>
        <div className='line-a-us'></div>
        <CV profil={amine}/>
        <CV profil={nassim}/>
    </div>
}

export default AboutUs