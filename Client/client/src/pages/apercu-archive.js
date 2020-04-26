import React, { useEffect } from 'react'
import { withRouter, Redirect } from 'react-router';
import ArchiveDlg from '../Components/Presentationals/Dialogs/archive-dialog';
import GetMaladesArchive from '../middleware/archive/GetMaladeArchiveById';
import ArchivePage from './archive-page';


const ApercuArchive = ({
    history,
    match
}) => {
    const [malade, setMalade] = React.useState({})
    useEffect(() => {
        async function fetchData() {
            setMalade(await GetMaladesArchive(match.params.id).then(res => res.maladeArchive));
        }
        fetchData()
    }, [match])
    return malade === null ? <Redirect to='/page-intouvable'></Redirect>
        :
        <div>
            <ArchiveDlg malade={malade} onClose={e => history.push('/archives')} toPrestations={e => history.push(`${match.params.id}/Prestations`)} />
        </div>
}

export default withRouter(ApercuArchive)