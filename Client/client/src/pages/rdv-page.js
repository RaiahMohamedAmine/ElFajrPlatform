import React from 'react'
import MainPage from './home';
import RdvDialog from '../Components/Presentationals/Dialogs/rdv-dialog';
import { withRouter } from 'react-router';


const RdvPage=({
    history
})=>{
    return <div>
        <RdvDialog onClose={e=> history.goBack()}/>
        <MainPage/>
    </div>
}

export default withRouter(RdvPage)