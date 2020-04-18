import React, { useEffect } from 'react'
import { withRouter } from 'react-router';
import ArchiveDlg from '../Components/Presentationals/Dialogs/archive-dialog';
import GetMaladesArchive from '../middleware/archive/GetMaladeArchiveById';


const ApercuArchive = ({
    history,
    match
}) => {
    const [malade, setMalade] = React.useState({})
    useEffect(() => {
        async function fetchData() {
            setMalade(await GetMaladesArchive( match.params.id).then(res => res.maladeArchive ));
        }
        fetchData()
    },[match])
    return <div>
      <ArchiveDlg malade={malade} onClose={e=> history.push('/archives')} toPrestations={e=> history.push(`${match.params.id}/Prestations`)}/>
    </div>
}

export default withRouter(ApercuArchive)