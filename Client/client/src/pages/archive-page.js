import React, { useState, useEffect } from 'react'
import './archive-page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Presentationals/WithRouter/header'
import ArchiveCard from '../Components/Presentationals/archive-card';
import GetMaladesArchive from '../middleware/archive/GetMaladesArchive';
import { withRouter } from 'react-router';


const ArchivePage = ({
    history
}) => {
    const [archives, setArchive] = useState([])
    const [loading, setLoad] = useState(true)
    useEffect(() => {
        GetMaladesArchive().then(res => {
            setArchive(res.maladesArchive)
            setLoad(false)
        })
    }, [])
    return <div className='archive-page'>
        <Header></Header>
        <div className='container-fluid archive-content'>
            {
                loading ? <div className='load'></div>
                    :
                    <div className='row archive-list' >
                        {
                            archives.map((malade,i) => <div className='col-3' key={i}>
                                <ArchiveCard malade={malade} onClick={e=> history.push('archives/'+malade._id)}/>
                            </div>)
                        }
                    </div>
            }
        </div>
    </div>
}


export default withRouter(ArchivePage)