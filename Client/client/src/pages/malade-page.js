import React, { useEffect } from 'react'
import MaladeDlg from '../Components/Presentationals/Dialogs/malade-dlg'
import { withRouter } from 'react-router';
import getMalade from '../middleware/getMalade'
import MainPage from './home';


const MaladePage = ({
    history,
    match
}) => {
    const [malade, setMalade] = React.useState({})
    useEffect(() => {
        async function fetchData() {
            setMalade(await getMalade({ key: match.params.id }).then(res => { return res[0] }))
        }
        fetchData()
    },[match])
    return <div>
        <MaladeDlg malade={malade} onClose={e => history.goBack()}
        onEdit={e=> history.push(`${match.params.id}/Modifier`)} 
        AddRdv={e=> history.push(`${match.params.id}/Rendez-Vous`)}/>
        <MainPage />
    </div>
}

export default withRouter(MaladePage)