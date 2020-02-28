import React from 'react'
import './home.css'
import Header from './../Components/Presentationals/header';
import MySearch from './../Components/Containers/Search';
import Malades from './../Components/Containers/Malades';

const MainPage = () => {
    return <div className='main-page'>
        <Header></Header>
        <div className='page-content'>
            <div className='page-content-left'>
                <MySearch />
                <Malades />
            </div>
            <div className='page-content-right'></div>
        </div>
    </div>
}

export default MainPage