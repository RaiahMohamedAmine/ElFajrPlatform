import React, { useState, useEffect } from 'react'
import './archive-page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoostrapTable from 'react-bootstrap-table-next'
import GetStatisticsDetails from '../middleware/prestation/GetStatisticsDetails';
import Header from '../Components/Presentationals/WithRouter/header'
import { withRouter } from 'react-router';


const ArchivePage = (
    year = new Date().getFullYear()
) => {
    const [MedicalStats, setMedicalStats] = useState([])
    const [SocialStats, setSocialStats] = useState([])
    const [BureauStats, setBureauStats] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
        GetStatisticsDetails(2020).then(res => {
            setMedicalStats(res.medicalStats);
            setSocialStats(res.socialeStats);
            setBureauStats(res.bureauStats);
            setloading(false)
        })
    }, [])
    return <div className='archive-page'>
        <Header></Header>
        <div className='container-fluid archive-content'>
          {
              loading?  
              <div/>
              :
              <BoostrapTable
                id='table'
                bootstrap4
                keyField = 'Imagerie'
                columns ={SocialStats.columns}
                data ={SocialStats.data}
             /> 
          }        
        </div>
    </div>
}
export default withRouter(ArchivePage)