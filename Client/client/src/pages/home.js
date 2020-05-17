import React from 'react'
import '../Base.css'
import './home.css'
import Header from './../Components/Presentationals/WithRouter/header';
import MySearch from './../Components/Containers/Search';
import Malades from './../Components/Containers/Malades';
import AddBtn from '../Components/Presentationals/WithRouter/add-btn';
import Rdvs from '../Components/Containers/Rdvs';
import { withRouter } from 'react-router';

const MainPage = ({
    history
}) => {
    return <div className='home'>
        <div className='main-page'>
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
    <p className='copyright'>Copyright &copy; 2019 Association El Fedjr Boumerdes. All Rights Reserved.| Privacy Policy.| <span onClick={e=> history.push('/about-us')}>About Us</span></p>
    </div>
}

export default withRouter(MainPage)