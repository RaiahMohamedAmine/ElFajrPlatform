import React from 'react'
import MainPage from './home';
import { withRouter } from 'react-router';
import MaladeRdv from '../Components/Containers/MaladeRdvs';

const RdvPage=({
    history,
    match
})=>{
    return <div>
        <MaladeRdv id={match.params.id} onClose={e=>history.push('/')} />
        <MainPage/>
    </div>
}

export default withRouter(RdvPage)