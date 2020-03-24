import React, { useEffect } from 'react'
import MaladeDlg from '../Components/Presentationals/Dialogs/malade-dlg'
import { withRouter } from 'react-router';
import getMaladeById from '../middleware/getMaladeById'
import MainPage from './home';


const MaladePage = ({
    history,
    match
}) => {
    const [malade, setMalade] = React.useState({})
    useEffect(() => {
        async function fetchData() {
            setMalade(await getMaladeById( match.params.id).then(res => res ));
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