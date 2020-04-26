import React from 'react'
import PrestationDlg from '../Components/Containers/PrestationDlg'
import MainPage from './home'
import { withRouter } from 'react-router';



const PrestationPage=({
    history,
    match
})=>{
    return <div>
        <PrestationDlg id={match.params.id} onClose={e=>history.push('/')} />
        <MainPage/>
    </div>
}

export default withRouter(PrestationPage)