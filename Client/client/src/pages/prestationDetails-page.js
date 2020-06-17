import React, { useState, useEffect } from 'react'
import './archive-page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoostrapTable from 'react-bootstrap-table-next'
import GetStatisticsDetails from '../middleware/prestation/GetStatisticsDetails';
import GetAllYears from '../middleware/prestation/GetAllYears';
import Header from '../Components/Presentationals/WithRouter/header'
import { withRouter } from 'react-router';
import { toastr } from 'react-redux-toastr';


const ArchivePage = (
    {
        location
    }

) => {
    const [Stats, setStats] = useState();
    const [loading, setloading] = useState(true);
    const [years, setYears] = useState([]);  
    const [currenState, setCurrentState]=useState({
        year:location.currentYear ? location.currentYear : new Date().getFullYear(),
        currentPres:location.currentPres ? location.currentPres :'medical',
    })
    useEffect(() => {
        GetAllYears().then(res => {
            setYears(res.years);
            if (res.years && res.years.length>0)  {
                GetStatisticsDetails(currenState.year).then(res => {
                    if (res.type==='Err')
                        toastr.error('Erreur !', 'Une erreur s\'est produite. Veuillez Réessayez !')
                    else
                    {
                        setStats(res.Stats)
                        setloading(false);                    
                    }
                }).catch (err=> toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
            }
        }).catch (err=> toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
    }, [])
    const setYear= yr=> setCurrentState({
        ...currenState,
        year:yr
    })
    const setCurrentPres=pres=>setCurrentState({
        ...currenState,
        currentPres:pres
    })
    var {year,currentPres}= currenState
    return <div className='archive-page'>
        <Header></Header>
        <div className='container-fluid archive-content'>
          {
              loading?  
              <div/>
              :
              <div>
                  <h1> Bilan Financier {year}</h1>
                  <div className='prestation-radio-btns'>
                                    <div>
                                        <input checked={currentPres === 'medical'} type='radio' name='prestation-graphe' value='medical' onChange={e =>setCurrentPres('medical')}></input>
                                        <label>Médicale</label>
                                    </div>
                                    <div>
                                        <input checked={currentPres === 'sociale'} type='radio' name='prestation-graphe' value='sociale' onChange={e => setCurrentPres('sociale')}></input>
                                        <label>Sociale</label>
                                    </div>
                                    <div>
                                        <input checked={currentPres === 'bureau'} type='radio' name='prestation-graphe' value='bureau' onChange={e =>setCurrentPres('bureau')}></input>
                                        <label>Bureau</label>
                                    </div>
                    </div>
                    <select className='select-years' defaultValue={year} onChange={e => {
                                setYear(e.target.value);
                                GetStatisticsDetails(e.target.value).then(res => {
                                    if (res.type==='Err')
                                    toastr.error('Erreur !', 'Une erreur s\'est produite. Veuillez Réessayez !')
                                    else
                                        setStats(res.Stats)
                                }).catch (err=> toastr.error('Erreur Fatale', 'Assurez vous que le serveur est en marche'));
                            }
                            }>
                                {
                                    years.map(yr => <option key={yr}>{yr}</option>)
                                }
                    </select>
                    <BoostrapTable
                        id='table'
                        bootstrap4
                        keyField = 'mois'
                        columns ={currentPres==='medical'? Stats.medicalStats.columns : currentPres==='sociale' ? Stats.socialeStats.columns : Stats.bureauStats.columns}
                        data ={currentPres==='medical'? Stats.medicalStats.data : currentPres==='sociale' ? Stats.socialeStats.data : Stats.bureauStats.data}
                    />
              </div> 
          }        
        </div>
    </div>
}
export default withRouter(ArchivePage)