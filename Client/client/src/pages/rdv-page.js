import React from 'react'
import MainPage from './home';
import RdvDialog from '../Components/Presentationals/Dialogs/rdv-dialog';
import { withRouter } from 'react-router';
import MaladeRdv from '../Components/Containers/MaladeRdvs';

const RdvPage=({
    history,
    match
})=>{
    return <div>
        <MaladeRdv id={match.params.id} onClose={e=> history.goBack()} />
        <MainPage/>
    </div>
}

export default withRouter(RdvPage)