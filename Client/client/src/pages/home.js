import React from 'react'
import './home.css'
import Header from './../Components/Presentationals/header';
import MySearch from './../Components/Containers/Search';
import Malades from './../Components/Containers/Malades';
import AddBtn from '../Components/Presentationals/WithRouter/add-btn';
import Rdvs from '../Components/Containers/Rdvs';

const MainPage = () => {
    return <div className='main-page'>
        <div className='add--btn'>
            <AddBtn/>
        </div>
        <Header></Header>   
        <div className='page-content'>
            <div className='page-content-left'>
                <MySearch />
                <Malades />
            </div>
            <div className='page-content-right'>
                <Rdvs/>
            </div>
        </div>
    </div>
}

export default MainPage